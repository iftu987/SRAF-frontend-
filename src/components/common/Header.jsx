import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';
import LanguageToggle from './LanguageToggle';

export const Header = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const { view, setView, setPage } = useAssessment();

  const handleLogoClick = () => {
    setView('marketing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartAssessment = () => {
    setView('app');
    setPage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'marketing') {
    return (
      <header className="marketing-header">
        <div className="marketing-logo" onClick={handleLogoClick}>
          <div className="m-logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D91A3A"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="26"
              height="26"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="m-logo-text">
            <strong>SRAF</strong>
            <span>SMARTPHONE READINESS</span>
          </div>
        </div>

        <nav className="marketing-nav">
          <a href="#marketing" className="active" onClick={handleLogoClick}>
            {t('nav_home')}
          </a>
          <a href="#assessment" onClick={handleStartAssessment}>
            {t('nav_assessment')}
          </a>
          <a href="#research" onClick={() => onOpenModal('research')}>
            {t('nav_research')}
          </a>
          <a href="#resources" onClick={() => onOpenModal('guide')}>
            {t('nav_resources')}
          </a>
        </nav>

        <LanguageToggle className="btn m-lang-btn" />
      </header>
    );
  }

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="marketing-logo" onClick={handleLogoClick}>
          <div className="m-logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D91A3A"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="26"
              height="26"
            >
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
        <LanguageToggle />
      </div>

      <div className="header-right">
        <div className="user-chip">
          👤 Parent Portal
        </div>
      </div>
    </header>
  );
};

export default Header;
