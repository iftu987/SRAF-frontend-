import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export default function MarketingLanding({ onOpenModal }) {
  const { t, lang, toggleLanguage } = useLanguage();
  const { setView, setPage } = useAssessment();

  const handleStart = () => {
    setView('app');
    setPage(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div id="marketing-landing">
      <div className="marketing-canvas-wrapper">
        <header className="marketing-header">
          <div className="marketing-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
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
          <nav className="marketing-nav">
            <a href="javascript:void(0)" className="active" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>{t('nav_home') || 'Home'}</a>
            <a href="javascript:void(0)" onClick={handleStart}>{t('nav_assessment') || 'Assessment'}</a>
            <a href="javascript:void(0)" onClick={() => onOpenModal('research')}>{t('nav_research') || 'Research Base'}</a>
            <a href="javascript:void(0)" onClick={() => onOpenModal('guide')}>{t('nav_resources') || 'Resources'}</a>
          </nav>
          <button className="btn m-lang-btn" onClick={toggleLanguage}>EN | BN</button>
        </header>

        <section className="marketing-hero">
          <div className="marketing-hero-content">
            <div className="m-badge">{t('badge_text') || 'RESEARCH-BACKED SMARTPHONE READINESS ASSESSMENT'}</div>
            <h1 className="m-title" dangerouslySetInnerHTML={{ __html: t('hero_title') || 'Is your child ready for a<br>smartphone?' }} />
            <p className="m-subtitle">{t('hero_desc') || 'Make an informed, confident decision. Our clinical-grade framework assesses behavioral maturity, situational safety, and peer ecosystem factors to provide a personalized guidance roadmap.'}</p>
            
            <div className="m-actions">
              <button className="btn btn-primary m-btn-primary" onClick={handleStart}>{t('btn_begin') || 'Begin Assessment'}</button>
              <button className="btn btn-outline m-btn-outline" onClick={() => onOpenModal('research')}>{t('btn_explore') || 'Explore Research'}</button>
            </div>
            
            <div className="m-meta">
              <span className="m-meta-item">⏱️ Takes ~8-10 minutes</span>
              <span className="m-meta-dot">&bull;</span>
              <span className="m-meta-item">🔒 Completely confidential</span>
              <span className="m-meta-dot">&bull;</span>
              <span className="m-meta-item">📋 Tailored parenting plan</span>
            </div>
            
            <div className="m-hero-divider"></div>
            
            <div className="m-features">
              <div className="m-feature-item">
                <div className="m-f-icon">🛡️</div>
                <div className="m-f-text" dangerouslySetInnerHTML={{ __html: t('feat_secure') || 'Confidential &<br>Secure' }} />
              </div>
              <div className="m-feature-item">
                <div className="m-f-icon">🧠</div>
                <div className="m-f-text" dangerouslySetInnerHTML={{ __html: t('feat_psychology') || 'Psychology<br>Backed' }} />
              </div>
              <div className="m-feature-item">
                <div className="m-f-icon">👥</div>
                <div className="m-f-text" dangerouslySetInnerHTML={{ __html: t('feat_families') || 'Used by 14,000+<br>Families' }} />
              </div>
            </div>
          </div>
          <div className="marketing-hero-image">
            <div className="m-preview-card">
              <div className="m-phone-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D91A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3>{t('preview_title') || 'Self-Guided Family Journey'}</h3>
              <p>{t('preview_desc') || 'Understand physical safety, emotional development, and social pressures to align on family boundaries before handing over the screen.'}</p>
              <div className="m-dots">
                <span className="active"></span><span></span><span></span>
              </div>
            </div>
          </div>
        </section>

        <div className="marketing-divider"></div>

        <section className="marketing-steps">
          <div className="m-steps-header">
            <div className="m-steps-subtitle">{t('steps_subtitle') || 'A GUIDED PROCESS'}</div>
            <h2>{t('steps_title') || 'How SRAF Works'}</h2>
          </div>
          <div className="m-steps-grid">
            <div className="m-step-card">
              <div className="m-step-badge blue">{t('step1_badge') || 'Step 01'}</div>
              <h3>{t('step1_title') || 'Family Context'}</h3>
              <p>{t('step1_desc') || 'We collect essential details about your child\'s age, daily routines, school environment, and household structures to frame the evaluation context.'}</p>
            </div>
            <div className="m-step-card">
              <div className="m-step-badge purple">{t('step2_badge') || 'Step 02'}</div>
              <h3>{t('step2_title') || 'Multidimensional Test'}</h3>
              <p>{t('step2_desc') || 'Answer structured behavioral questions measuring emotional maturity, peer dependency, safety literacy, and parental enforcement readiness.'}</p>
            </div>
            <div className="m-step-card">
              <div className="m-step-badge pink">{t('step3_badge') || 'Step 03'}</div>
              <h3>{t('step3_title') || 'Readiness Report'}</h3>
              <p>{t('step3_desc') || 'Receive a precise Readiness Score out of 100, broken down by assessment category, paired with a customized Family Media Agreement template.'}</p>
            </div>
          </div>
        </section>
        
        <div className="marketing-divider"></div>

        <footer className="marketing-footer">
          <div className="m-footer-grid">
            <div className="m-footer-brand">
              <div className="marketing-logo">
                <div className="m-logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D91A3A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="m-logo-text">
                  <strong>SRAF</strong>
                  <span>SMARTPHONE READINESS</span>
                </div>
              </div>
              <p>{t('footer_desc') || 'SRAF is a research-backed, parent-focused framework developed in partnership with child psychologists and digital wellness experts to guide healthy technology adoption.'}</p>
            </div>
            <div className="m-footer-links">
              <h4>{t('footer_platform') || 'PLATFORM'}</h4>
              <a href="javascript:void(0)" onClick={handleStart}>{t('footer_take_assessment') || 'Take Assessment'}</a>
              <a href="javascript:void(0)" onClick={() => onOpenModal('schools')}>{t('footer_schools') || 'For Schools'}</a>
            </div>
            <div className="m-footer-links">
              <h4>{t('footer_resources') || 'RESOURCES'}</h4>
              <a href="javascript:void(0)" onClick={() => onOpenModal('research')}>{t('footer_research_library') || 'Research Library'}</a>
              <a href="javascript:void(0)" onClick={() => onOpenModal('agreement')}>{t('footer_agreement') || 'Family Media Agreement'}</a>
              <a href="javascript:void(0)" onClick={() => onOpenModal('guide')}>{t('footer_guide') || 'Parenting Guide'}</a>
            </div>
            <div className="m-footer-links">
              <h4>{t('footer_legal') || 'LEGAL'}</h4>
              <a href="javascript:void(0)" onClick={() => onOpenModal('privacy')}>{t('footer_privacy') || 'Privacy Policy'}</a>
              <a href="javascript:void(0)" onClick={() => onOpenModal('terms')}>{t('footer_terms') || 'Terms of Service'}</a>
              <a href="javascript:void(0)" onClick={() => onOpenModal('security')}>{t('footer_security') || 'Data Security'}</a>
            </div>
          </div>
          <div className="m-footer-bottom">
            <p>&copy; 2026 Smartphone Readiness Assessment Framework (SRAF). All rights reserved.</p>
            <div className="m-credits" style={{ fontSize: '0.85rem', color: '#6b7280' }}>
              Designed and Developed by 
              <a href="https://mamarobotics.in" target="_blank" rel="noreferrer" style={{ color: '#4b5563', fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: '2px', margin: '0 4px' }}>MamaRobotics&reg;</a> 
              and 
              <a href="https://www.linkedin.com/in/md-iftikhar-hossain/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 900, textDecoration: 'none', letterSpacing: '1px', margin: '0 4px' }}>IFTIKHAR</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
