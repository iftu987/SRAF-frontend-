import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export default function FamilyMediaAgreement() {
  const { lang, t } = useLanguage();
  const { demographics } = useAssessment();

  const parentName = demographics.parentName || 'ifti';
  const childName = demographics.childName || 'leo';

  const rules = [
    {
      numEn: '1.',
      numBn: '১.',
      textEn: 'Screen-free 60 min before sleep',
      textBn: 'ঘুমানোর ১ ঘণ্টা আগে নো-স্ক্রিন জোন'
    },
    {
      numEn: '2.',
      numBn: '২.',
      textEn: 'No phones at the dinner table',
      textBn: 'পারিবারিক খাবার টেবিলে ফোন নিষিদ্ধ'
    },
    {
      numEn: '3.',
      numBn: '৩.',
      textEn: 'Parent approval required for apps',
      textBn: 'নতুন অ্যাপ ডাউনলোডে অনুমতি আবশ্যক'
    },
    {
      numEn: '4.',
      numBn: '৪.',
      textEn: 'Never share passwords or location online',
      textBn: 'অনলাইনে অপরিচিতদের তথ্য না দেওয়া'
    }
  ];

  return (
    <div className="report-fma-card">
      <h3 className="fma-header">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e11d48"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>{t('rpt_fma_title')}</span>
      </h3>
      <p className="fma-subtitle">
        {t('rpt_fma_desc')}
      </p>

      <div className="fma-rules-grid">
        {rules.map((rule, idx) => (
          <div key={idx} className="fma-rule-item">
            <span className="fma-rule-num">
              {lang === 'bn' ? rule.numBn : rule.numEn}
            </span>
            <span>
              {lang === 'bn' ? rule.textBn : rule.textEn}
            </span>
          </div>
        ))}
      </div>

      <div className="fma-signatures">
        <div>
          <div className="fma-sig-name">{parentName.toLowerCase()}</div>
          <div className="fma-sig-line" />
          <div className="fma-sig-label">{t('rpt_fma_sig_parent')}</div>
        </div>
        <div>
          <div className="fma-sig-name">{childName.toLowerCase()}</div>
          <div className="fma-sig-line" />
          <div className="fma-sig-label">{t('rpt_fma_sig_child')}</div>
        </div>
      </div>
    </div>
  );
}
