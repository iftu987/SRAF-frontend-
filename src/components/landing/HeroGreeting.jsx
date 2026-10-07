import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export const HeroGreeting = () => {
  const { lang } = useLanguage();
  const { setPage } = useAssessment();
  const [greeting, setGreeting] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const titleText = lang === 'bn' ? 'স্মার্টফোন ব্যবহারের জন্য শিশু কি প্রস্তুত?' : 'Data-Driven Clarity for Digital Parenting.';

  useEffect(() => {
    // Set greeting based on hour
    const hour = new Date().getHours();
    let engGreeting = "Good Evening";
    let bnGreeting = "শুভ সন্ধ্যা";
    
    if (hour >= 5 && hour < 12) {
      engGreeting = "Good Morning";
      bnGreeting = "শুভ সকাল";
    } else if (hour >= 12 && hour < 17) {
      engGreeting = "Good Afternoon";
      bnGreeting = "শুভ অপরাহ্ন";
    }
    
    setGreeting(lang === 'bn' ? `${bnGreeting}, অভিভাবকদের স্বাগতম!` : `${engGreeting}, Welcome Parents!`);
    
    // Typing effect
    let currentIdx = 0;
    setTypedTitle('');
    
    const intervalId = setInterval(() => {
      setTypedTitle(titleText.slice(0, currentIdx + 1));
      currentIdx++;
      if (currentIdx >= titleText.length) {
        clearInterval(intervalId);
      }
    }, 50);
    
    return () => clearInterval(intervalId);
  }, [lang, titleText]);

  return (
    <section className="page hero-fullscreen active" id="page-0">
      <div className="hero-content">
        <div className="greeting-pill">
          <span>✨</span>
          <span id="greeting-pill-text">{greeting}</span>
        </div>
        <h1 className="typing-title">
          <span id="typed-title">{typedTitle}</span><span className="cursor">|</span>
        </h1>
        <p id="ui-hero-subtitle" className="hero-subtitle">
          {lang === 'bn' 
            ? 'আপনার শিশু কি সত্যিই স্মার্টফোনের জন্য প্রস্তুত? আমাদের বৈজ্ঞানিক কাঠামোর (SRAF) সাহায্যে সঠিক সিদ্ধান্ত নিন।'
            : 'Is your child truly ready for a smartphone? Discover actionable data-driven insights with our Smartphone Readiness Assessment Framework (SRAF).'}
        </p>
        <button className="btn btn-hero" onClick={() => setPage(1)}>
          {lang === 'bn' ? 'মূল্যায়ন শুরু করুন →' : 'Begin Assessment →'}
        </button>
      </div>
    </section>
  );
};

export default HeroGreeting;
