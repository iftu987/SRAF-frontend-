import React, { useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

import GaugeCard from './GaugeCard';
import SectionPerformance from './SectionPerformance';
import RecommendationsGrid from './RecommendationsGrid';
import SubdomainAccordion from './SubdomainAccordion';
import FamilyMediaAgreement from './FamilyMediaAgreement';
import ReportActions from './ReportActions';

export default function ResultsPage() {
  const { lang, toggleLanguage, t } = useLanguage();
  const { demographics, calculateScores, submitToBackend } = useAssessment();

  const scores = useMemo(() => calculateScores(), [calculateScores]);

  useEffect(() => {
    // console.log("mounted results page");
    // Fire celebratory confetti on report view load
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    // Persist assessment result to MERN backend
    submitToBackend(lang);
  }, []);

  const formatDate = () => {
    const monthsEn = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthsBn = [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const d = new Date();
    const day = d.getDate();
    const monthIdx = d.getMonth();
    const year = d.getFullYear();

    if (lang === 'bn') {
      const bnDay = String(day).split('').map((c) => bnNums[c] || c).join('');
      const bnYear = String(year).split('').map((c) => bnNums[c] || c).join('');
      return `সংগৃহীত: ${bnDay} ${monthsBn[monthIdx]}, ${bnYear}`;
    }
    return `Saved ${monthsEn[monthIdx]} ${day}, ${year}`;
  };

  const childName = (demographics.childName || 'LEO').toUpperCase();
  const schoolGrade = demographics.schoolGrade || '9';
  const parentName = demographics.parentName || 'Ifti';
  const genderIcon = demographics.childGender === 'female' ? '🚺' : '🚹';

  return (
    <section className="page report-page-wrapper" id="page-3">
      {/* Assessment Completed Banner */}
      <div className="report-banner">
        <div className="report-banner-left">
          <div className="report-banner-icon">✓</div>
          <div>
            <div className="report-banner-title">{t('rpt_completed_title')}</div>
            <div className="report-banner-sub">{t('rpt_completed_sub')}</div>
          </div>
        </div>
        <div className="report-banner-right">
          <button
            type="button"
            className="btn-lang-pill"
            onClick={toggleLanguage}
            id="rpt-banner-lang-btn"
          >
            🌐 বাংলা / English
          </button>
          <button
            type="button"
            className="btn-pill-action"
            onClick={() => window.print()}
          >
            🖨️ <span>{t('rpt_print')}</span>
          </button>
        </div>
      </div>

      {/* Main SRAF Assessment Report Card */}
      <div id="pdf-report-content" className="report-main-card">
        {/* Header */}
        <div className="report-header-row">
          <div>
            <h2 className="report-title-main">
              <span>📱</span> <span>{t('rpt_sraf_title')}</span>
            </h2>
            <p className="report-title-sub">{t('rpt_sraf_subtitle')}</p>
          </div>
          <div>
            <button
              type="button"
              className="btn-lang-pill"
              onClick={toggleLanguage}
              id="rpt-header-lang-btn"
            >
              🌐 বাংলা / English
            </button>
          </div>
        </div>

        {/* Privacy & Demographics Box */}
        <div className="report-privacy-bar" id="rpt-privacy-box">
          <div className="privacy-left">
            <div className="privacy-icon-box">🔒</div>
            <div>
              <div className="privacy-title">{t('rpt_private_title')}</div>
              <div className="privacy-sub" id="report-date-display">{formatDate()}</div>
            </div>
          </div>
          <div className="privacy-right">
            <span id="rpt-child-meta-label">{t('rpt_for_child')}</span>
            <strong id="rpt-child-name">{childName}</strong>
            <span>•</span>
            <span id="rpt-grade-meta-label">{t('rpt_grade')}</span>
            <strong id="rpt-school-grade">{schoolGrade}</strong>
            <span style={{ fontSize: '1.05rem' }}>{genderIcon}</span>
            <span id="rpt-parent-meta-label">{t('rpt_by_parent')}</span>
            <strong id="rpt-parent-name">{parentName}</strong>
          </div>
        </div>

        {/* Dual Gauge Score Cards: OCS and PCAI */}
        <div className="report-gauges-grid">
          <GaugeCard
            title={t('rpt_ocs_title')}
            score={scores.ocs}
            tier={scores.tier}
            tierDesc={scores.tierDesc}
            isOcs={true}
          />
          <GaugeCard
            title={t('rpt_pcai_title')}
            score={scores.pcai}
            statusText={scores.pcaiDesc}
            description={t('rpt_pcai_sub')}
            isOcs={false}
          />
        </div>

        {/* Section Performance */}
        <SectionPerformance sectionPercentages={scores.sectionPercentages} />

        {/* 2x2 Smart Recommendations Grid */}
        <RecommendationsGrid />

        {/* Radar Chart in Accordion */}
        <SubdomainAccordion domainScores={scores.domainScores} />

        {/* Official Family Media Agreement (FMA) */}
        <FamilyMediaAgreement />

        {/* Footer inside PDF / report */}
        <div className="report-footer">
          <div>{t('rpt_footer_copy')}</div>
          <div dangerouslySetInnerHTML={{ __html: t('rpt_footer_dev') }} />
        </div>
      </div>

      {/* Action buttons at the end */}
      <ReportActions />
    </section>
  );
}
