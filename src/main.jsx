import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { AssessmentProvider } from './context/AssessmentContext';
import './styles/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AssessmentProvider>
        <App />
      </AssessmentProvider>
    </LanguageProvider>
  </React.StrictMode>
);
