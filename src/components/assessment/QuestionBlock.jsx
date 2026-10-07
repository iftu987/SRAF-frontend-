import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';

export const QuestionBlock = ({ question }) => {
  const { lang } = useLanguage();
  const { answers, updateAnswer } = useAssessment();

  const selectedValue = answers[question.id]; // undefined if not answered yet

  const optionsEn = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
  const optionsBn = ['সম্পূর্ণ দ্বিমত', 'দ্বিমত', 'নিরপেক্ষ', 'একমত', 'সম্পূর্ণ একমত'];
  
  const options = lang === 'bn' ? optionsBn : optionsEn;
  const questionText = lang === 'bn' && question.text_bn ? question.text_bn : question.text;

  return (
    <div className="question-item">
      <div className="question-text">
        {questionText}
      </div>
      <div className="likert-options">
        {options.map((optLabel, idx) => {
          const val = idx + 1;
          const isSelected = selectedValue === val;
          return (
            <button
              key={val}
              type="button"
              className={`likert-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => updateAnswer(question.id, val)}
            >
              {optLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBlock;
