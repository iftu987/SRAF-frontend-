import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';
import { surveySections } from '../../data/surveySections';

export const Sidebar = () => {
  const { lang } = useLanguage();
  const { currentSection, setCurrentSection, answers } = useAssessment();

  const totalQuestions = surveySections.reduce(
    (acc, sec) => acc + sec.subdomains.reduce((subAcc, sub) => subAcc + sub.questions.length, 0),
    0
  );
  const answeredCount = Object.keys(answers).length;
  const overallPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <aside className="survey-sidebar">
      <div className="card sidebar-card">
        <h3>{lang === 'bn' ? 'সেকশন তালিকা' : 'Assessment Sections'}</h3>

        <div className="sidebar-sections-list">
          {surveySections.map((sec, idx) => {
            const isCurrent = currentSection === idx;
            const secQuestions = sec.subdomains.flatMap((s) => s.questions);
            const secAnswered = secQuestions.filter((q) => answers[q.id] !== undefined).length;
            const isCompleted = secAnswered === secQuestions.length;

            const title =
              lang === 'bn' && sec.title_bn
                ? sec.title_bn.split('–')[0].trim()
                : sec.title.split(':')[0].trim();

            return (
              <div
                key={idx}
                className={`sidebar-section-item ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => {
                  setCurrentSection(idx);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="sidebar-sec-header">
                  <span className="sidebar-sec-num">{idx + 1}</span>
                  <span className="sidebar-sec-title">{title}</span>
                </div>
                <div className="sidebar-sec-meta">
                  <span>{secAnswered}/{secQuestions.length}</span>
                  {isCompleted && <span className="check-badge">✓</span>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="sidebar-summary-box" style={{ marginTop: '20px' }}>
          <h4>{lang === 'bn' ? 'সামগ্রিক অগ্রগতি' : 'Overall Progress'}</h4>
          <div className="sidebar-progress-bar">
            <div
              className="sidebar-progress-fill"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>
            {answeredCount} / {totalQuestions} {lang === 'bn' ? 'প্রশ্ন সম্পন্ন হয়েছে' : 'questions answered'} ({overallPercent}%)
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
