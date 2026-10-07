import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const RecommendationsGrid = () => {
  const { lang, t } = useLanguage();
  const isBn = lang === 'bn';

  const checkIcon = (
    <svg
      className="rec-bullet-icon"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="9" />
      <polyline points="6 10 9 13 14 7" />
    </svg>
  );

  const cards = [
    {
      dot: 'dot-green',
      title: isBn
        ? 'শিশুর আচরণগত ও দায়বদ্ধতার ভালো ভিত্তি বিদ্যমান'
        : 'Solid Child Behavioral Foundations',
      desc: isBn
        ? 'আপনার সন্তান বিদ্যমান ডিভাইসের ক্ষেত্রে দায়িত্বশীল সিদ্ধান্ত গ্রহণ, শ্রদ্ধাশীল আচরণ এবং স্বাস্থ্যকর রুটিন প্রদর্শন করছে।'
        : 'Your child exhibits responsible decision making, respectful communication, and healthy boundaries with existing devices.',
      bullets: isBn
        ? [
            'বিশ্বাস আরও সুদৃঢ় করতে অতিরিক্ত নজরদারির বদলে পারস্পরিক খোলামেলা আলোচনার সম্পর্ক বজায় রাখুন।',
            'সোশ্যাল মিডিয়ার নিষ্ক্রিয় স্ক্রোলিংয়ের চেয়ে সৃজনশীল বা শিক্ষামূলক কাজে ফোন ব্যবহার উৎসাহিত করুন।'
          ]
        : [
            'Maintain open dialogue rather than restrictive surveillance to reinforce trust.',
            'Encourage creative or educational smartphone usage over passive social scrolling.'
          ]
    },
    {
      dot: 'dot-blue',
      title: isBn
        ? 'অভিভাবকের কার্যকর তদারকি ও সহায়তা কাঠামো প্রস্তুত'
        : 'Strong Parental Supervision Framework',
      desc: isBn
        ? 'আপনি আপনার পরিবারের জন্য স্বাস্থ্যকর ডিজিটাল সীমানা নির্ধারণ ও দিকনির্দেশনা প্রদানে যথেষ্ট সচেতন ও প্রস্তুত।'
        : 'You are well-prepared to guide, mentor, and establish healthy digital boundaries for your household.',
      bullets: isBn
        ? [
            'অনলাইনে দেখা যেকোনো আকর্ষণীয় বা অস্বস্তিকর বিষয় নিয়ে সপ্তাহে ১০ মিনিটের নিয়মিত আলাপ করুন।'
          ]
        : [
            'Conduct regular weekly 10-minute check-ins about interesting or concerning things seen online.'
          ]
    },
    {
      dot: 'dot-purple',
      title: isBn
        ? 'পারিবারিক মিডিয়া চুক্তি (FMA) স্বাক্ষর ও প্রণয়ন'
        : 'Establish a Signed Family Media Agreement (FMA)',
      desc: isBn
        ? 'একটি লিখিত এবং যৌথভাবে সম্মত পারিবারিক চুক্তি দায়িত্ববোধ বৃদ্ধি করে এবং দৈনন্দিন তর্ক-বিতর্ক দূর করে।'
        : 'A written, mutually agreed contract creates shared accountability and minimizes daily power struggles.',
      bullets: isBn
        ? [
            'এই রিপোর্টে সংযুক্ত অফিসিয়াল SRAF পারিবারিক চুক্তি প্রিন্ট করে উভয়ে স্বাক্ষর করুন।',
            'চুক্তিপত্রটি ফ্রিজের গায়ে বা পড়ার টেবিলের স্পষ্ট জায়গায় ঝুলিয়ে রাখুন।'
          ]
        : [
            'Print and sign the official SRAF Family Media Agreement included in this report.',
            'Post the agreement on the refrigerator or common study board for high visibility.'
          ]
    },
    {
      dot: 'dot-purple',
      title: isBn
        ? 'পর্যায়ক্রমিক পর্যালোচনা ও পুন:মূল্যায়নের সময়সীমা'
        : 'Scheduled Re-Assessment Milestone',
      desc: isBn
        ? 'শিশুর বিকাশ এবং ডিজিটাল দক্ষতা সময়ের সাথে পরিবর্তিত হয়। ব্যবহারের সুযোগ বাড়ানোর জন্য একটি পুনর্মূল্যায়নের তারিখ ঠিক করুন।'
        : 'Child development and digital competence evolve quickly. Schedule a re-evaluation to unlock additional privileges.',
      bullets: isBn
        ? [
            'স্ক্রিন টাইম মেনে চলা ও শিষ্টাচার পর্যালোচনার জন্য ৯০ দিন (৩ মাস) পর একটি অগ্রগতি পরীক্ষার তারিখ নির্ধারণ করুন।'
          ]
        : [
            'Schedule a 90-day progress checkup to review screen time compliance and digital etiquette.'
          ]
    }
  ];

  return (
    <div className="report-recs-section">
      <h3 className="recs-title">{t('rpt_recs_title')}</h3>
      <div className="recs-grid">
        {cards.map((c, idx) => (
          <div key={idx} className="rec-card">
            <div className="rec-card-header">
              <span className={`rec-dot ${c.dot}`} />
              <h4 className="rec-card-title">{c.title}</h4>
            </div>
            <p className="rec-card-desc">{c.desc}</p>
            <ul className="rec-bullet-list">
              {c.bullets.map((b, bIdx) => (
                <li key={bIdx} className="rec-bullet-item">
                  {checkIcon}
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsGrid;
