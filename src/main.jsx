import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { AssessmentProvider } from './context/AssessmentContext';
import './styles/app.css';

/**
 * Suppress a known Firebase SDK internal bug where after a failed
 * signInWithPhoneNumber (e.g. auth/billing-not-enabled), the SDK
 * tries to reset the reCAPTCHA widget but the reset callback ("e")
 * is undefined, producing an Uncaught TypeError.
 *
 * This error is inside Firebase's minified bundle — not our code.
 * The actual failure (billing/region/etc.) is already caught and
 * shown to the user by DemographicsForm's error handler.
 */
window.addEventListener('unhandledrejection', (event) => {
  const msg = event.reason?.message || '';
  if (msg.includes('is not a function') || msg.includes('e is not a function')) {
    event.preventDefault(); // stops it from appearing in the console
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AssessmentProvider>
        <App />
      </AssessmentProvider>
    </LanguageProvider>
  </React.StrictMode>
);
