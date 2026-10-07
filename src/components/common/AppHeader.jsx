import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export function AppHeader() {
  const { toggleLanguage } = useLanguage();
  const { setView } = useAssessment();

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="marketing-logo" onClick={() => setView('marketing')} style={{ cursor: 'pointer' }}>
          <div className="m-logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D91A3A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="m-logo-text">
            <strong>SRAF</strong>
            <span>SMARTPHONE READINESS</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        <button className="lang-toggle-btn" id="lang-toggle-btn" onClick={toggleLanguage}>
          🌐 English / বাংলা
        </button>
      </div>

      <div className="header-right">
        <div className="user-chip">
          👤 Parent Portal
        </div>
      </div>
    </header>
  );
}
