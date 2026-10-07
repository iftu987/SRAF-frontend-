import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Modals = ({ activeModal, onClose }) => {
  const { t } = useLanguage();

  if (!activeModal) return null;

  return (
    <div className="modal-backdrop" style={{ display: 'flex' }} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal-btn" onClick={onClose}>✕</span>

        {activeModal === 'pricing' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_price_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_price_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_price_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_price_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_price_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'schools' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_sch_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_sch_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_sch_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_sch_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_sch_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'privacy' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_priv_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_priv_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_priv_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_priv_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_priv_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'terms' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_terms_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_terms_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_terms_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_terms_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_terms_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'security' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_sec_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_sec_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_sec_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_sec_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_sec_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'research' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_res_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_res_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_res_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_res_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_res_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'agreement' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_agr_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_agr_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_agr_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_agr_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_agr_l3') }} />
            </ul>
          </>
        )}

        {activeModal === 'guide' && (
          <>
            <h3 style={{ marginBottom: '12px' }}>{t('m_gui_title')}</h3>
            <p className="subtitle" style={{ marginBottom: '20px' }}>{t('m_gui_sub')}</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '24px' }}>
              <li dangerouslySetInnerHTML={{ __html: t('m_gui_l1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_gui_l2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('m_gui_l3') }} />
            </ul>
          </>
        )}

        <div style={{ textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={onClose}>
            {t('modal_close', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
