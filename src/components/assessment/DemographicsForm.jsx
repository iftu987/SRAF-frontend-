/**
 * DemographicsForm.jsx
 *
 * Family background form with Firebase Phone Authentication.
 *
 * The reCAPTCHA container stays mounted with this component. Its verifier
 * is created on demand so React StrictMode cannot race widget rendering
 * against an effect cleanup during initial mount.
 */

import React, { useState, useEffect, useRef } from 'react';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth, firebaseReady } from '../../config/firebase.js';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';
import OtpModal from './OtpModal';
import { sendOtp } from '../../services/firebaseAuth.js';

export const DemographicsForm = () => {
  const { lang, showToast } = useLanguage();
  const { demographics, setDemographics, setPage, setFirebaseUser } = useAssessment();
  const [showOtp, setShowOtp] = useState(false);
  const [requestingOtp, setRequestingOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifierRef = useRef(null);
  const recaptchaButtonRef = useRef(null);

  useEffect(() => {
    return () => {
      clearVerifier();
    };
  }, []);

  const clearVerifier = () => {
    const verifier = recaptchaVerifierRef.current;
    recaptchaVerifierRef.current = null;
    if (!verifier) return;

    try {
      verifier.clear();
    } catch (error) {
      console.error('[Firebase reCAPTCHA] Failed to clear verifier:', error);
    }
  };

  const getRecaptchaVerifier = async () => {
    if (!recaptchaButtonRef.current) {
      const error = new Error('The reCAPTCHA submit button is not mounted.');
      error.code = 'auth/recaptcha-not-ready';
      throw error;
    }

    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(
        auth,
        recaptchaButtonRef.current,
        { size: 'invisible' }
      );
    }

    await recaptchaVerifierRef.current.render();
    return recaptchaVerifierRef.current;
  };

  const resetVerifier = async (verifier) => {
    const widgetId = await verifier.render();
    const recaptcha = window.grecaptcha;
    if (!recaptcha?.reset) {
      throw new Error('Google reCAPTCHA is unavailable to reset the widget.');
    }
    recaptcha.reset(widgetId);
  };

  // ── Form field handler ────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { id, value } = e.target;
    let name = '';
    if (id === 'parent-name')   name = 'parentName';
    if (id === 'parent-mobile') name = 'parentMobile';
    if (id === 'parent-role')   name = 'parentRole';
    if (id === 'child-name')    name = 'childName';
    if (id === 'child-age')     name = 'childAge';
    if (id === 'school-grade')  name = 'schoolGrade';
    if (id === 'family-type')   name = 'familyType';
    setDemographics((prev) => ({ ...prev, [name]: value }));
  };

  // ── Send OTP ──────────────────────────────────────────────────────────────
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!demographics.parentName || !demographics.parentMobile || !demographics.childAge || !demographics.schoolGrade) {
      showToast(
        lang === 'bn'
          ? 'অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন।'
          : 'Please fill out all required fields.',
        'warning'
      );
      return;
    }

    if (!/^\+\d{7,15}$/.test(demographics.parentMobile)) {
      showToast(
        lang === 'bn'
          ? 'মোবাইল নম্বরটি আন্তর্জাতিক ফরম্যাটে দিন, যেমন: +8801XXXXXXXXX'
          : 'Use international format: +8801712345678 or +919876543210',
        'warning'
      );
      return;
    }

    if (!firebaseReady || !auth) {
      showToast(
        lang === 'bn'
          ? 'Firebase সেটআপ সম্পূর্ণ হয়নি। .env ফাইল পরীক্ষা করুন।'
          : 'Firebase is not configured. Please check the frontend .env file.',
        'error'
      );
      return;
    }

    setRequestingOtp(true);
    let verifier;
    try {
      verifier = await getRecaptchaVerifier();
      const result = await sendOtp(demographics.parentMobile, verifier);
      setConfirmationResult(result);
      setShowOtp(true);
      showToast(
        lang === 'bn'
          ? 'আপনার মোবাইলে একটি ভেরিফিকেশন কোড পাঠানো হয়েছে।'
          : 'A verification code has been sent to your mobile.',
        'success'
      );
    } catch (err) {
      console.error('[Firebase sendOtp] Error:', err);
      if (verifier) {
        try {
          await resetVerifier(verifier);
        } catch (resetError) {
          console.error('[Firebase reCAPTCHA] Failed to reset widget:', resetError);
        }
      }

      const errorCode = err?.code;
      const msg =
        errorCode === 'auth/configuration-not-ready'
          ? (lang === 'bn'
              ? 'Firebase সেটআপ সম্পূর্ণ নয়। .env ফাইল এবং Firebase project configuration পরীক্ষা করুন।'
              : 'Firebase is not fully configured. Please check the frontend .env file and Firebase project settings.')
          : errorCode === 'auth/recaptcha-not-ready'
          ? (lang === 'bn'
              ? 'reCAPTCHA প্রস্তুত হচ্ছে। একটু অপেক্ষা করে আবার চেষ্টা করুন।'
              : 'reCAPTCHA is still initializing. Please wait a moment and try again.')
          : errorCode === 'auth/invalid-phone-number'
          ? (lang === 'bn'
              ? 'মোবাইল নম্বরটি সঠিক নয়। আন্তর্জাতিক ফরম্যাটে দিন।'
              : 'Invalid phone number. Use international format e.g. +8801712345678')
          : errorCode === 'auth/captcha-check-failed' || errorCode === 'auth/invalid-app-credential'
          ? (lang === 'bn'
              ? 'reCAPTCHA যাচাই ব্যর্থ হয়েছে। ডোমেইন ও Firebase Phone Auth সেটিংস পরীক্ষা করে আবার চেষ্টা করুন।'
              : 'reCAPTCHA verification failed. Check the authorized domain and Firebase Phone Auth settings, then try again.')
          : errorCode === 'auth/too-many-requests'
          ? (lang === 'bn'
              ? 'অনেক বার চেষ্টা করা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।'
              : 'Too many requests. Please wait and try again.')
          : errorCode === 'auth/operation-not-allowed'
          ? (lang === 'bn'
              ? 'এই অঞ্চলে SMS সক্রিয় করা হয়নি। Firebase Console থেকে SMS region সক্রিয় করুন।'
              : 'SMS is not enabled for this region. Enable it in Firebase Console → Auth → Settings → SMS region policy.')
          : errorCode === 'auth/billing-not-enabled'
          ? (lang === 'bn'
              ? 'Firebase Blaze plan প্রয়োজন। Firebase Console থেকে billing সক্রিয় করুন।'
              : 'Firebase Blaze plan required. Enable billing in Firebase Console.')
          : (lang === 'bn'
              ? 'OTP পাঠাতে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।'
              : `Could not send OTP (${errorCode || 'unknown error'}). Please try again.`);

      showToast(msg, 'error');
    } finally {
      setRequestingOtp(false);
    }
  };

  const handleOtpSuccess = (firebaseUser) => {
    if (setFirebaseUser) setFirebaseUser(firebaseUser);
    setShowOtp(false);
    setPage(2);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="page" id="page-1">
      <div className="card">
        <h2>{lang === 'bn' ? 'ধাপ ১: পারিবারিক পটভূমির তথ্য' : 'Step 1: Family Background Information'}</h2>
        <p className="subtitle">
          {lang === 'bn'
            ? 'মূল্যায়ন শুরু করার আগে অনুগ্রহ করে আপনার এবং আপনার সন্তান সম্পর্কে মৌলিক বিবরণ পূরণ করুন।'
            : 'Please enter basic details about yourself and your child before starting the core assessment.'}
        </p>

        <form onSubmit={handleFormSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="parent-name">Parent / Guardian Name</label>
              <input type="text" id="parent-name" value={demographics.parentName || ''} onChange={handleChange} placeholder="e.g. Sarah Jenkins" required />
            </div>

            <div className="form-group">
              <label htmlFor="parent-mobile">Parent / Guardian Mobile Number</label>
              <input type="tel" id="parent-mobile" value={demographics.parentMobile || ''} onChange={handleChange} placeholder="+8801712345678" inputMode="tel" autoComplete="tel" required />
              <small style={{ color: 'var(--text-muted)' }}>
                {lang === 'bn'
                  ? 'আন্তর্জাতিক ফরম্যাটে দিন, যেমন: +8801712345678'
                  : 'Use international format e.g. +8801712345678 or +919876543210'}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="parent-role">Your Role</label>
              <select id="parent-role" value={demographics.parentRole || 'Mother'} onChange={handleChange} required>
                <option value="Mother">Mother / মা</option>
                <option value="Father">Father / বাবা</option>
                <option value="Guardian">Guardian / অভিভাবক</option>
                <option value="Grandparent">Grandparent / দাদা/দাদী/নানা/নানী</option>
                <option value="Other">Other / অন্যান্য</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="child-name">Child's Name (Optional)</label>
              <input type="text" id="child-name" value={demographics.childName || ''} onChange={handleChange} placeholder="e.g. Leo" />
            </div>

            <div className="form-group">
              <label htmlFor="child-age">Child's Age (Years)</label>
              <input type="number" id="child-age" value={demographics.childAge || 12} onChange={handleChange} min="6" max="18" required />
            </div>

            <div className="form-group">
              <label htmlFor="school-grade">School Grade / Class</label>
              <input type="text" id="school-grade" value={demographics.schoolGrade || ''} onChange={handleChange} placeholder="e.g. Grade 7" required />
            </div>

            <div className="form-group">
              <label htmlFor="family-type">Family Structure</label>
              <select id="family-type" value={demographics.familyType || 'Nuclear'} onChange={handleChange} required>
                <option value="Nuclear">Nuclear Family / একক পরিবার</option>
                <option value="Joint">Joint / Extended Family / যৌথ পরিবার</option>
                <option value="Single Parent">Single Parent Family / এক অভিভাবকভিত্তিক পরিবার</option>
                <option value="Other">Other / অন্যান্য</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              id="firebase-recaptcha-submit"
              ref={recaptchaButtonRef}
              type="submit"
              className="btn btn-primary"
              disabled={requestingOtp}
            >
              {requestingOtp
                ? (lang === 'bn' ? 'OTP পাঠানো হচ্ছে...' : 'Sending OTP...')
                : (lang === 'bn' ? 'চালিয়ে যান ও মোবাইল যাচাই করুন →' : 'Continue & Verify Mobile →')}
            </button>
          </div>
        </form>
      </div>

      <OtpModal
        isOpen={showOtp}
        onClose={() => setShowOtp(false)}
        onSuccess={handleOtpSuccess}
        mobile={demographics.parentMobile}
        confirmationResult={confirmationResult}
      />
    </section>
  );
};

export default DemographicsForm;
