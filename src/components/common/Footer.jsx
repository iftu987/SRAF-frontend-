import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export const Footer = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const { setView, setPage } = useAssessment();

  const handleStartAssessment = () => {
    setView('app');
    setPage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="marketing-footer">
      <div className="m-footer-top">
        <div className="m-footer-brand">
          <div className="marketing-logo">
            <div className="m-logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D91A3A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="m-logo-text">
              <strong>SRAF</strong>
              <span>SMARTPHONE READINESS</span>
            </div>
          </div>
          <p>{t('footer_desc')}</p>
        </div>

        <div className="m-footer-links">
          <div className="m-footer-col">
            <h4>{t('footer_platform')}</h4>
            <a href="#assessment" onClick={handleStartAssessment}>{t('footer_take_assessment')}</a>
            <a href="#pricing" onClick={() => onOpenModal('pricing')}>{t('footer_pricing')}</a>
            <a href="#schools" onClick={() => onOpenModal('schools')}>{t('footer_schools')}</a>
          </div>

          <div className="m-footer-col">
            <h4>{t('footer_resources')}</h4>
            <a href="#research" onClick={() => onOpenModal('research')}>{t('footer_research_library')}</a>
            <a href="#agreement" onClick={() => onOpenModal('agreement')}>{t('footer_agreement')}</a>
            <a href="#guide" onClick={() => onOpenModal('guide')}>{t('footer_guide')}</a>
          </div>

          <div className="m-footer-col">
            <h4>{t('footer_legal')}</h4>
            <a href="#privacy" onClick={() => onOpenModal('privacy')}>{t('footer_privacy')}</a>
            <a href="#terms" onClick={() => onOpenModal('terms')}>{t('footer_terms')}</a>
            <a href="#security" onClick={() => onOpenModal('security')}>{t('footer_security')}</a>
          </div>
        </div>
      </div>

      <div className="m-footer-bottom">
        <p>&copy; 2026 Smartphone Readiness Assessment Framework (SRAF). All rights reserved.</p>
        <p>
          Designed and Developed by <strong>MamaRobotics&reg;</strong> and{' '}
          <strong style={{ color: '#E11D48' }}>IFTIKHAR</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
