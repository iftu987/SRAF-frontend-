import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';
import { surveySections } from '../../data/surveySections';
import QuestionBlock from './QuestionBlock';

export const SurveyContainer = () => {
  const { lang } = useLanguage();
  const {
    currentSection,
    setCurrentSection,
    setPage,
    submitToBackend,
    answers,
    demographics
  } = useAssessment();
  const [openSubdomain, setOpenSubdomain] = useState(0);

  const section = surveySections[currentSection];
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === surveySections.length - 1;

  const handleNext = () => {
    if (!isLastSection) {
      setCurrentSection((prev) => prev + 1);
      setOpenSubdomain(0);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      submitToBackend(lang);
      setPage(3);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handlePrev = () => {
    if (!isFirstSection) {
      setCurrentSection((prev) => prev - 1);
      setOpenSubdomain(0);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setPage(1);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const sectionTitle = lang === 'bn' && section.title_bn ? section.title_bn : section.title;
  const sectionDesc = lang === 'bn' && section.desc_bn ? section.desc_bn : section.description;

  let totalQuestions = 0;
  for (let s = 0; s < surveySections.length; s++) {
    surveySections[s].subdomains.forEach(sub => totalQuestions += sub.questions.length);
  }

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const isSectionComplete = (idx) => {
    const sec = surveySections[idx];
    if (!sec) return false;
    const secQuestions = sec.subdomains.flatMap(sub => sub.questions);
    return secQuestions.every(q => answers[q.id] !== undefined);
  };

  return (
    <section className="page" id="page-2">
      <div className="survey-layout">
        
        {/* LEFT SIDEBAR - Profile & Progress */}
        <aside className="survey-sidebar left-sidebar">
          <h3>Profile & Progress</h3>
          <div id="sidebar-summary-box">
            <div style={{ background: 'var(--bg2)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Parent / Guardian</div>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>{demographics.parentName || 'Parent'}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Child</div>
              <div style={{ fontWeight: '600' }}>{demographics.childName || 'Child'} ({demographics.childAge || '-'} yrs)</div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px', fontWeight: '500' }}>
                <span>Completion</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="sidebar-progress-bar" style={{ height: '8px', background: 'var(--bg2)', borderRadius: '10px', overflow: 'hidden' }}>
                <div className="sidebar-progress-fill" style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--success)', transition: 'width 0.3s' }}></div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="survey-content">
          
          <div style={{ marginBottom: '15px' }}>
            <h2 id="section-title">{sectionTitle}</h2>
            <p className="subtitle" id="section-desc" style={{ marginBottom: '5px' }}>{sectionDesc}</p>
          </div>

          <div id="subdomains-container">
            {section.subdomains.map((subdomain, subIdx) => {
              const subName = lang === 'bn' && subdomain.name_bn ? subdomain.name_bn : subdomain.name;
              const isOpen = openSubdomain === subIdx;

              return (
                <div key={subIdx} className={`subdomain-card ${isOpen ? 'open' : ''}`}>
                  <div 
                    className="subdomain-header" 
                    onClick={() => {
                      const wasOpen = openSubdomain === subIdx;
                      setOpenSubdomain(wasOpen ? -1 : subIdx);
                    }}
                  >
                    <span>{subName}</span>
                    <span>{isOpen ? '▲' : '▼'}</span>
                  </div>
                  
                  {isOpen && (
                    <div className="subdomain-content" style={{ display: 'block' }}>
                      {subdomain.questions.map((q) => (
                        <QuestionBlock key={q.id} question={q} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="survey-actions" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              type="button" 
              className="btn btn-secondary" 
              id="btn-prev-section" 
              onClick={handlePrev}
              style={{ visibility: isFirstSection ? 'hidden' : 'visible' }}
            >
              {lang === 'bn' ? '← পূর্ববর্তী সেকশন' : '← Previous Section'}
            </button>
            <button type="button" className="btn btn-primary" id="btn-next-section" onClick={handleNext}>
              {isLastSection
                ? (lang === 'bn' ? 'ফলাফল দেখুন →' : 'View Results →')
                : (lang === 'bn' ? 'পরবর্তী সেকশন →' : 'Next Section →')}
            </button>
          </div>
        </div>
        
        {/* RIGHT SIDEBAR - Assessment Journey */}
        <aside className="survey-sidebar right-sidebar">
          <h3>Assessment Journey</h3>
          <div className="journey-section">
            <div className="journey-section-title">Step 2: Core Questionnaires</div>
            {surveySections.map((sec, idx) => {
              let title = lang === 'bn' && sec.title_bn ? sec.title_bn : sec.title;
              if (isSectionComplete(idx)) {
                title += ' ✅';
              }
              return (
                <div 
                  key={idx}
                  className={`journey-item ${currentSection === idx ? 'active' : ''}`}
                  id={`sidebar-sec-${idx}`}
                  onClick={() => {
                    setCurrentSection(idx);
                    setOpenSubdomain(0);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </aside>

      </div>
    </section>
  );
};

export default SurveyContainer;
