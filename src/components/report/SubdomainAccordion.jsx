import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import RadarChart from './RadarChart';

export const SubdomainAccordion = ({ domainScores }) => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const toggleLabel = lang === 'bn' 
    ? (isOpen ? 'লুকান ⌃' : 'দেখুন ⌵') 
    : (isOpen ? 'Hide ⌃' : 'Show ⌵');

  return (
    <div className="report-accordion">
      <div className="report-accordion-header" onClick={toggle}>
        <div className="accordion-header-left">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <circle cx="4" cy="12" r="2" />
            <circle cx="12" cy="10" r="2" />
            <circle cx="20" cy="14" r="2" />
          </svg>
          <span>{t('rpt_accordion_title')}</span>
        </div>
        <div className="accordion-toggle-btn">{toggleLabel}</div>
      </div>

      {isOpen && (
        <div className="report-accordion-body" style={{ display: 'block' }}>
          <RadarChart domainScores={domainScores} />
        </div>
      )}
    </div>
  );
};

export default SubdomainAccordion;
