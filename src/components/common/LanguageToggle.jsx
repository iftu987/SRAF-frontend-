import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageToggle = ({ className = 'lang-toggle-btn' }) => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className={className}
      onClick={toggleLanguage}
      aria-label="Toggle Language"
    >
      {lang === 'en' ? '🌐 English / বাংলা' : '🌐 বাংলা / English'}
    </button>
  );
};

export default LanguageToggle;
