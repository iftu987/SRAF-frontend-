import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export default function ReportActions() {
  const { t } = useLanguage();
  const { demographics, resetAssessment, saveStatus } = useAssessment();

  const handleDownloadPdf = async () => {
    const element = document.getElementById('pdf-report-content');
    if (!element) {
      window.print();
      return;
    }
    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default || html2pdfModule;
      const opt = {
        margin: 0.5,
        filename: `SRAF_Report_${demographics.childName || 'Child'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.warn('html2pdf library error, falling back to browser print:', err);
      window.print();
    }
  };

  const getStatusColor = () => {
    if (saveStatus.state === 'saved') return '#10b981';
    if (saveStatus.state === 'error') return '#ef4444';
    return 'var(--text-muted)';
  };

  return (
    <>
      <div
        id="backend-save-status"
        style={{
          marginTop: '1.25rem',
          textAlign: 'right',
          fontSize: '13px',
          color: getStatusColor(),
          fontWeight: 500
        }}
      >
        {saveStatus.message || (saveStatus.state === 'saved' ? '✓ Assessment saved' : 'Assessment completed')}
      </div>

      <div className="report-actions-end">
        <button
          type="button"
          className="btn-restart-action"
          onClick={resetAssessment}
        >
          🔄 <span>{t('rpt_restart_btn')}</span>
        </button>
        <button
          type="button"
          className="btn-pdf-download"
          onClick={handleDownloadPdf}
        >
          📥 <span>{t('rpt_download_pdf')}</span>
        </button>
      </div>
    </>
  );
}
