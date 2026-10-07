/**
 * OtpModal.jsx
 *
 * Firebase Phone Auth OTP verification modal.
 *
 * Changes from old version:
 * ──────────────────────────
 * - Old: called authService.verifyOtp(mobile, code) → backend → Twilio
 * - New: calls confirmOtp(confirmationResult, code) → Firebase Client SDK
 *   confirmationResult is passed in as a prop from DemographicsForm after
 *   a successful sendOtp() call.
 *
 * After the Firebase OTP is confirmed the signed-in Firebase user is stored
 * in AssessmentContext (via onAuthSuccess callback) so the rest of the app
 * can call user.getIdToken() for backend API calls.
 *
 * OTP code is 6 digits (Firebase standard).
 * Test phone numbers configured in Firebase Console use any 6-digit code.
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';
import { confirmOtp } from '../../services/firebaseAuth.js';

export const OtpModal = ({ isOpen, onClose, onSuccess, mobile, confirmationResult }) => {
  const { lang } = useLanguage();
  const { showToast } = useAssessment();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code || code.length < 6) {
      showToast(
        lang === 'bn'
          ? 'অনুগ্রহ করে ৬ ডিজিটের কোড দিন।'
          : 'Please enter the 6-digit verification code.',
        'error'
      );
      return;
    }

    if (!confirmationResult) {
      showToast(
        lang === 'bn'
          ? 'ভেরিফিকেশন সেশন পাওয়া যায়নি। পুনরায় OTP পাঠান।'
          : 'Verification session not found. Please resend the OTP.',
        'error'
      );
      return;
    }

    setLoading(true);
    try {
      // Verify OTP with Firebase — on success the user is signed in
      const userCredential = await confirmOtp(confirmationResult, code);

      showToast(
        lang === 'bn'
          ? 'মোবাইল নম্বর যাচাই সফল হয়েছে!'
          : 'Mobile number verified successfully!',
        'success'
      );

      // Pass the Firebase user up so AssessmentContext can store it
      onSuccess(userCredential.user);
    } catch (err) {
      console.error('[Firebase OTP] Verification failed:', err.code, err.message);

      const msg = err.code === 'auth/invalid-verification-code'
        ? (lang === 'bn' ? 'ভুল ভেরিফিকেশন কোড। পুনরায় চেষ্টা করুন।' : 'Invalid verification code. Try again.')
        : err.code === 'auth/code-expired'
          ? (lang === 'bn' ? 'কোডের মেয়াদ শেষ হয়ে গেছে। পুনরায় OTP পাঠান।' : 'Code has expired. Please resend the OTP.')
          : (lang === 'bn' ? 'যাচাইকরণ ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।' : 'Verification failed. Please try again.');

      showToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" style={{ display: 'flex' }}>
      <div className="modal-card">
        <h3>{lang === 'bn' ? 'মোবাইল নম্বর যাচাই' : 'Verify Mobile Number'}</h3>
        <p className="subtitle" style={{ marginTop: '5px' }}>
          {lang === 'bn'
            ? 'আপনার মোবাইলে একটি ৬ ডিজিটের কোড পাঠানো হয়েছে:'
            : 'A 6-digit verification code has been sent to:'}{' '}
          <strong>{mobile || '--'}</strong>
        </p>

        <p
          style={{
            marginTop: '10px',
            padding: '10px',
            borderRadius: '8px',
            background: 'rgba(59,130,246,0.1)',
            color: '#1d4ed8',
            fontSize: '13px',
          }}
        >
          {lang === 'bn'
            ? 'Firebase SMS এর মাধ্যমে আপনার নম্বরে কোডটি পাঠানো হয়েছে। কোড না পেলে কয়েক সেকেন্ড অপেক্ষা করুন।'
            : 'Firebase sent the code via SMS. If you don\'t receive it within a few seconds, go back and try again.'}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginTop: '16px' }}>
            <label htmlFor="otp-input">
              {lang === 'bn' ? '৬ ডিজিট ভেরিফিকেশন কোড' : '6-Digit Verification Code'}
            </label>
            <input
              type="text"
              id="otp-input"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="123456"
              maxLength={6}
              inputMode="numeric"
              autoComplete="one-time-code"
              style={{
                textAlign: 'center',
                letterSpacing: '8px',
                fontSize: '1.3rem',
                fontWeight: '700',
              }}
              required
              autoFocus
            />
          </div>

          <div
            className="modal-actions"
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-end',
              marginTop: '1.25rem',
            }}
          >
            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={loading}>
              {lang === 'bn' ? 'বাতিল' : 'Cancel'}
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading || !confirmationResult}>
              {loading
                ? (lang === 'bn' ? 'যাচাই হচ্ছে...' : 'Verifying...')
                : (lang === 'bn' ? 'নিশ্চিত করুন' : 'Verify & Continue')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpModal;
