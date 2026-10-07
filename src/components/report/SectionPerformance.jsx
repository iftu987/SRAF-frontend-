import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const SectionPerformance = ({ sectionPercentages = [] }) => {
  const { lang, t } = useLanguage();

  const sectionDefs = [
    { en: 'Smartphone Need Assessment (SNA)', bn: 'স্মার্টফোনের প্রয়োজনীয়তা মূল্যায়ন (SNA)' },
    { en: 'EXTRA SECTION: Social Expectations & Influence Assessment (SEIA)', bn: 'সামাজিক প্রত্যাশা ও প্রভাব মূল্যায়ন (SEIA)' },
    { en: 'Child Readiness Assessment (CRA) - Parent Evaluation', bn: 'শিশুর প্রস্তুতি মূল্যায়ন (CRA) - অভিভাবকের পর্যবেক্ষণ' },
    { en: 'Section 3b: Child Self-Assessment (CSA)', bn: 'সেকশন ৩খ: শিশুর স্ব-মূল্যায়ন (CSA)' },
    { en: 'Parent Readiness Assessment (PRA)', bn: 'অভিভাবকের প্রস্তুতি মূল্যায়ন (PRA)' },
    { en: 'Environmental & Contextual Risk Assessment (ECRA)', bn: 'পরিবেশগত ও প্রাসঙ্গিক ঝুঁকি মূল্যায়ন (ECRA)' }
  ];

  return (
    <div className="report-section-perf">
      <div className="section-perf-header">
        <h3 className="section-perf-title">{t('rpt_sec_perf_title')}</h3>
        <span className="section-perf-scale-label">{t('rpt_scale_label')}</span>
      </div>

      <div className="section-bars-list">
        {sectionDefs.map((sec, idx) => {
          const pct = sectionPercentages[idx] !== undefined ? sectionPercentages[idx] : 75;
          const isOrange = pct < 70;
          const fillClass = isOrange ? 'fill-orange' : 'fill-green';
          const title = lang === 'bn' ? sec.bn : sec.en;

          return (
            <div key={idx} className="section-perf-item">
              <div className="section-perf-labels">
                <span>{title}</span>
                <strong>{pct}%</strong>
              </div>
              <div className="section-bar-track">
                <div className="section-bar-ticks">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div
                  className={`section-bar-fill ${fillClass}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-scale-axis">
        <span>0</span>
        <span>10</span>
        <span>20</span>
        <span>30</span>
        <span>40</span>
        <span>50</span>
        <span>60</span>
        <span>70</span>
        <span>80</span>
        <span>90</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default SectionPerformance;
