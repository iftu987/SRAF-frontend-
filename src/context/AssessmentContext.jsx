import React, { createContext, useContext, useState, useEffect } from 'react';
import { surveySections } from '../data/surveySections';
import { assessmentService } from '../services/api';

const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  // Try to load saved state
  const getInitialState = () => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        if (params.get('view') || params.get('page') !== null) {
          return {
            view: params.get('view') || 'app',
            page: params.get('page') !== null ? Number(params.get('page')) : 3,
            demographics: {
              parentName: 'Ifti',
              parentMobile: '+8801700000000',
              parentRole: 'Father',
              childName: 'LEO',
              childAge: 14,
              childGender: 'male',
              schoolGrade: '9',
              familyType: 'Nuclear'
            }
          };
        }
      }
      const saved = localStorage.getItem('SRAF_MERN_PROGRESS');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not parse saved progress:', e);
    }
    return null;
  };

  const savedState = getInitialState();

  const [view, setView] = useState(savedState?.view || 'marketing'); // 'marketing' or 'app'
  const [page, setPage] = useState(savedState?.page || 0); // 0: Greeting, 1: Demographics, 2: Survey, 3: Report
  const [currentSection, setCurrentSection] = useState(savedState?.currentSection || 0);

  const [demographics, setDemographics] = useState(savedState?.demographics || {
    parentName: '',
    parentMobile: '',
    parentRole: 'Mother',
    childName: '',
    childAge: 12,
    schoolGrade: '',
    familyType: 'Nuclear'
  });

  const [answers, setAnswers] = useState(savedState?.answers || {});
  const [submissionId, setSubmissionId] = useState(savedState?.submissionId || null);
  const [saveStatus, setSaveStatus] = useState({ state: 'idle', message: '' });
  const [toast, setToast] = useState(null);
  // Firebase signed-in user (set after OTP confirmation in DemographicsForm)
  const [firebaseUser, setFirebaseUser] = useState(null);

  // Auto-save progress
  useEffect(() => {
    try {
      const progress = {
        view,
        page,
        currentSection,
        demographics,
        answers,
        submissionId
      };
      localStorage.setItem('SRAF_MERN_PROGRESS', JSON.stringify(progress));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [view, page, currentSection, demographics, answers, submissionId]);

  const showToast = (message, type = 'warning') => {
    setToast({ message, type, id: Date.now() });
  };

  const hideToast = () => {
    setToast(null);
  };

  const updateAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: Number(value)
    }));
  };

  const resetAssessment = () => {
    localStorage.removeItem('SRAF_MERN_PROGRESS');
    setPage(0);
    setCurrentSection(0);
    setAnswers({});
    setSubmissionId(null);
    setSaveStatus({ state: 'idle', message: '' });
  };

  // Calculate Scores
  const calculateScores = () => {
    const domainScores = {};
    const sectionPercentages = [];

    surveySections.forEach((sec, idx) => {
      let secSum = 0;
      let secMax = 0;

      sec.subdomains.forEach((sub) => {
        let subSum = 0;
        let subMax = 0;

        sub.questions.forEach((q) => {
          const rawVal = answers[q.id] !== undefined ? Number(answers[q.id]) : 3;
          let val = Math.max(1, Math.min(5, rawVal)) - 1;

          if (q.isReverse) {
            val = 4 - val;
          }

          subSum += val;
          subMax += 4;
          secSum += val;
          secMax += 4;
        });

        const normalized = subMax > 0 ? (subSum / subMax) * 100 : 0;
        domainScores[sub.name] = Math.round(normalized);
      });

      const secPct = secMax > 0 ? Math.round((secSum / secMax) * 100) : 0;
      sectionPercentages[idx] = secPct;
    });

    const sna = sectionPercentages[0] || 0;
    const craParent = sectionPercentages[2] || 0;
    const pra = sectionPercentages[4] || 0;
    const ecra = sectionPercentages[5] || 0;

    const ocs = Math.round(sna * 0.2 + craParent * 0.35 + pra * 0.3 + ecra * 0.15);

    let tier = 'Tier 3';
    let tierDesc = 'Limited / Shared Device Access / সীমিত ও যৌথ ব্যবহারের প্রস্তুতি আবশ্যক';

    if (ocs >= 85) {
      tier = 'Tier 1';
      tierDesc = 'Full Independent Smartphone Access / পূর্ণ স্বাধীন স্মার্টফোন ব্যবহারের উপযোগী';
    } else if (ocs >= 70) {
      tier = 'Tier 2';
      tierDesc = 'Supervised / Restricted Smartphone Access / তদারকি সাপেক্ষে ব্যবহারের উপযোগী';
    } else if (ocs >= 50) {
      tier = 'Tier 3';
      tierDesc = 'Limited / Shared Device Access / সীমিত ও যৌথ ব্যবহারের প্রস্তুতি আবশ্যক';
    } else {
      tier = 'Tier 4';
      tierDesc = 'Non-Smartphone / Basic Phone Recommended / স্মার্টফোনের অনুপযোগী, সাধারণ ফিচার ফোন দিন';
    }

    // PCAI calculation
    let totalDifference = 0;
    let pcaiQuestionsCount = 0;

    if (surveySections[2] && surveySections[3]) {
      const parentQuestions = surveySections[2].subdomains.flatMap((s) => s.questions);
      const childQuestions = surveySections[3].subdomains.flatMap((s) => s.questions);

      const minLen = Math.min(parentQuestions.length, childQuestions.length);
      for (let i = 0; i < minLen; i++) {
        const pRaw = answers[parentQuestions[i].id] !== undefined ? Number(answers[parentQuestions[i].id]) : 3;
        const cRaw = answers[childQuestions[i].id] !== undefined ? Number(answers[childQuestions[i].id]) : 3;

        let pVal = pRaw - 1;
        let cVal = cRaw - 1;

        if (parentQuestions[i].isReverse) pVal = 4 - pVal;
        if (childQuestions[i].isReverse) cVal = 4 - cVal;

        totalDifference += Math.abs(pVal - cVal);
        pcaiQuestionsCount++;
      }
    }

    const pcaiMaxDiff = pcaiQuestionsCount * 4;
    const pcai = pcaiMaxDiff > 0 ? Math.round(100 - (totalDifference / pcaiMaxDiff) * 100) : 100;

    let pcaiDesc = 'Excellent Agreement / চমৎকার মিল';
    if (pcai < 60) pcaiDesc = 'Significant Perception Gap / উল্লেখযোগ্য অমিল';
    else if (pcai < 70) pcaiDesc = 'Low Agreement / কম মিল';
    else if (pcai < 80) pcaiDesc = 'Moderate Agreement / মাঝারি মিল';
    else if (pcai < 90) pcaiDesc = 'Good Agreement / ভালো মিল';

    return {
      ocs,
      tier,
      tierDesc,
      pcai,
      pcaiDesc,
      domainScores,
      sectionPercentages
    };
  };

  // Submit to backend (Firebase ID Token is auto-injected by the axios interceptor)
  const submitToBackend = async (lang = 'en') => {
    try {
      setSaveStatus({ state: 'saving', message: 'Saving assessment securely...' });
      const payload = {
        ...demographics,
        answers,
        sections: surveySections,
        language: lang
      };

      const result = await assessmentService.submit(payload);
      if (result && result.status === 'success') {
        setSubmissionId(result.submissionId || result.id || null);
        setSaveStatus({
          state: 'saved',
          message: result.submissionId
            ? `✓ Assessment saved successfully — ${result.submissionId}`
            : '✓ Assessment submitted successfully.'
        });
      }
    } catch (err) {
      console.warn('Backend save notice:', err.message);
      setSaveStatus({
        state: 'fallback',
        message: 'Saved locally on device (offline mode).'
      });
    }
  };

  return (
    <AssessmentContext.Provider
      value={{
        view,
        setView,
        page,
        setPage,
        currentSection,
        setCurrentSection,
        demographics,
        setDemographics,
        answers,
        updateAnswer,
        calculateScores,
        submitToBackend,
        saveStatus,
        submissionId,
        resetAssessment,
        toast,
        showToast,
        hideToast,
        // Firebase auth state
        firebaseUser,
        setFirebaseUser,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};
