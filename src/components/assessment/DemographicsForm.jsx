/**
 * DemographicsForm.jsx
 *
 * Family background form with Firebase Phone Authentication.
 *
 * reCAPTCHA container strategy
 * ────────────────────────────
 * The #recaptcha-container div is appended directly to document.body
 * (outside React's virtual DOM). This prevents the "Cannot read properties
 * of null (reading 'style')" error in recaptcha_en.js, which is caused by
 * React's reconciler replacing the container's DOM node while Google's
 * reCAPTCHA library still holds a reference to the old (now null) node.
 *
 * By keeping the container in document.body, React can never interfere
 * with the reCAPTCHA widget lifecycle.
 */

import React, { useState, useEffect, useRef } from 'react';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../config/firebase.js';
import { useLanguage } from '../../context/LanguageContext';
import { useAssessment } from '../../context/AssessmentContext';
import OtpModal from './OtpModal';
import { sendOtp } from '../../services/firebaseAuth.js';

const RECAPTCHA_CONTAINER_ID = 'firebase-recaptcha-root';

export const DemographicsForm = () => {
  const { lang, showToast } = useLanguage();
  const { demographics, setDemographics, setPage, setFirebaseUser } = useAssessment();
  const [showOtp, setShowOtp] = useState(false);
  const [requestingOtp, setRequestingOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifierRef = useRef(null);

  // ── Mount a stable reCAPTCHA container on document.body ──────────────────
  // This is intentionally OUTSIDE React's virtual DOM so reconciliation
  // never removes or replaces the node while reCAPTCHA is using it.
  useEffect(() => {
    // Create the body-level container once
    let container = document.getElementById(RECAPTCHA_CONTAINER_ID);
    if (!container) {
      container = document.createElement('div');
      container.id = RECAPTCHA_CONTAINER_ID;
      container.style.position = 'fixed';
      container.style.bottom = '0';
      container.style.right = '0';
      container.style.zIndex = '-1';
      document.body.appendChild(container);
    }

    // Initialize the RecaptchaVerifier against the stable body container
    recaptchaVerifierRef.current = new RecaptchaVerifier(
      auth,
      RECAPTCHA_CONTAINER_ID,
      {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA challenge solved automatically
        },
        'expired-callback': () => {
          // Token expired — reset on next attempt via resetVerifier()
        },
      }
    );

    // Pre-render the widget so it's ready immediately on button click
    recaptchaVerifierRef.current.render().catch(() => {
      // Silently ignore render failures (strict privacy browsers, etc.)
    });

    // ── Cleanup on unmount ──────────────────────────────────────────────────
    return () => {
      clearVerifier();
      // Remove the body container when the form unmounts
      const el = document.getElementById(RECAPTCHA_CONTAINER_ID);
      if (el) el.remove();
    };
  }, []); // run once on mount

  const clearVerifier = () => {
    if (recaptchaVerifierRef.current) {
      try { recaptchaVerifierRef.current.clear(); } catch { /* ignore */ }
      recaptchaVerifierRef.current = null;
    }
  };

  const resetVerifier = () => {
    clearVerifier();
    const container = document.getElementById(RECAPTCHA_CONTAINER_ID);
    if (!container) return;
    recaptchaVerifierRef.current = new RecaptchaVerifier(
      auth,
      RECAPTCHA_CONTAINER_ID,
      { size: 'invisible' }
    );
    recaptchaVerifierRef.current.render().catch(() => {});
  };

  // ── Form field handler ────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { id, value } = e.target;
    let name = '';
    if (id === 'parent-name')   name = 'parentName';
    if (id === 'parent-mobile') name = 'parentMobile';
    if (id === 'parent-role')   name = 'parentRole';
    if (id === 'child-name')    name = 'childName';
    if (id === 'child-age')     name = 'childAge';
    if (id === 'school-grade')  name = 'schoolGrade';
    if (id === 'family-type')   name = 'familyType';
    setDemographics((prev) => ({ ...prev, [name]: value }));
  };

  // ── Send OTP ──────────────────────────────────────────────────────────────
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!demographics.parentName || !demographics.parentMobile || !demographics.childAge || !demographics.schoolGrade) {
      showToast(
        lang === 'bn'
          ? 'অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন।'
          : 'Please fill out all required fields.',
        'warning'
      );
      return;
    }

    if (!/^\+\d{7,15}$/.test(demographics.parentMobile)) {
      showToast(
        lang === 'bn'
          ? 'মোবাইল নম্বরটি আন্তর্জাতিক ফরম্যাটে দিন, যেমন: +8801XXXXXXXXX'
          : 'Use international format: +8801712345678 or +919876543210',
        'warning'
      );
      return;
    }

    if (!recaptchaVerifierRef.current) {
      showToast(
        lang === 'bn'
          ? 'reCAPTCHA প্রস্তুত হচ্ছে। একটু অপেক্ষা করুন।'
          : 'reCAPTCHA is loading. Please wait a moment and try again.',
        'warning'
      );
      return;
    }

    setRequestingOtp(true);
    try {
      const result = await sendOtp(demographics.parentMobile, recaptchaVerifierRef.current);
      setConfirmationResult(result);
      setShowOtp(true);
      showToast(
        lang === 'bn'
          ? 'আপনার মোবাইলে একটি ভেরিফিকেশন কোড পাঠানো হয়েছে।'
          : 'A verification code has been sent to your mobile.',
        'success'
      );
    } catch (err) {
      console.error('[Firebase sendOtp] Error:', err.code, err.message);
      resetVerifier(); // recreate for next attempt

      const msg =
        err.code === 'auth/invalid-phone-number'
          ? (lang === 'bn'
              ? 'মোবাইল নম্বরটি সঠিক নয়। আন্তর্জাতিক ফরম্যাটে দিন।'
              : 'Invalid phone number. Use international format e.g. +8801712345678')
          : err.code === 'auth/too-many-requests'
          ? (lang === 'bn'
              ? 'অনেক বার চেষ্টা করা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।'
              : 'Too many requests. Please wait and try again.')
          : err.code === 'auth/operation-not-allowed'
          ? (lang === 'bn'
              ? 'এই অঞ্চলে SMS সক্রিয় করা হয়নি। Firebase Console থেকে SMS region সক্রিয় করুন।'
              : 'SMS is not enabled for this region. Enable it in Firebase Console → Auth → Settings → SMS region policy.')
          : err.code === 'auth/billing-not-enabled'
          ? (lang === 'bn'
              ? 'Firebase Blaze plan প্রয়োজন। Firebase Console থেকে billing সক্রিয় করুন।'
              : 'Firebase Blaze plan required. Enable billing in Firebase Console.')
          : (lang === 'bn'
              ? 'OTP পাঠাতে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।'
              : `Could not send OTP (${err.code || 'unknown error'}). Please try again.`);

      showToast(msg, 'error');
    } finally {
      setRequestingOtp(false);
    }
  };

  const handleOtpSuccess = (firebaseUser) => {
    if (setFirebaseUser) setFirebaseUser(firebaseUser);
    setShowOtp(false);
    setPage(2);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="page" id="page-1">
      {/* NOTE: The reCAPTCHA container is appended to document.body in useEffect
          so React cannot interfere with it. No div needed here. */}

      <div className="card">
        <h2>{lang === 'bn' ? 'ধাপ ১: পারিবারিক পটভূমির তথ্য' : 'Step 1: Family Background Information'}</h2>
        <p className="subtitle">
          {lang === 'bn'
            ? 'মূল্যায়ন শুরু করার আগে অনুগ্রহ করে আপনার এবং আপনার সন্তান সম্পর্কে মৌলিক বিবরণ পূরণ করুন।'
            : 'Please enter basic details about yourself and your child before starting the core assessment.'}
        </p>

        <form onSubmit={handleFormSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="parent-name">Parent / Guardian Name</label>
              <input type="text" id="parent-name" value={demographics.parentName || ''} onChange={handleChange} placeholder="e.g. Sarah Jenkins" required />
            </div>

            <div className="form-group">
              <label htmlFor="parent-mobile">Parent / Guardian Mobile Number</label>
              <input type="tel" id="parent-mobile" value={demographics.parentMobile || ''} onChange={handleChange} placeholder="+8801712345678" inputMode="tel" autoComplete="tel" required />
              <small style={{ color: 'var(--text-muted)' }}>
                {lang === 'bn'
                  ? 'আন্তর্জাতিক ফরম্যাটে দিন, যেমন: +8801712345678'
                  : 'Use international format e.g. +8801712345678 or +919876543210'}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="parent-role">Your Role</label>
              <select id="parent-role" value={demographics.parentRole || 'Mother'} onChange={handleChange} required>
                <option value="Mother">Mother / মা</option>
                <option value="Father">Father / বাবা</option>
                <option value="Guardian">Guardian / অভিভাবক</option>
                <option value="Grandparent">Grandparent / দাদা/দাদী/নানা/নানী</option>
                <option value="Other">Other / অন্যান্য</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="child-name">Child's Name (Optional)</label>
              <input type="text" id="child-name" value={demographics.childName || ''} onChange={handleChange} placeholder="e.g. Leo" />
            </div>

            <div className="form-group">
              <label htmlFor="child-age">Child's Age (Years)</label>
              <input type="number" id="child-age" value={demographics.childAge || 12} onChange={handleChange} min="6" max="18" required />
            </div>

            <div className="form-group">
              <label htmlFor="school-grade">School Grade / Class</label>
              <input type="text" id="school-grade" value={demographics.schoolGrade || ''} onChange={handleChange} placeholder="e.g. Grade 7" required />
            </div>

            <div className="form-group">
              <label htmlFor="family-type">Family Structure</label>
              <select id="family-type" value={demographics.familyType || 'Nuclear'} onChange={handleChange} required>
                <option value="Nuclear">Nuclear Family / একক পরিবার</option>
                <option value="Joint">Joint / Extended Family / যৌথ পরিবার</option>
                <option value="Single Parent">Single Parent Family / এক অভিভাবকভিত্তিক পরিবার</option>
                <option value="Other">Other / অন্যান্য</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary" disabled={requestingOtp}>
              {requestingOtp
                ? (lang === 'bn' ? 'OTP পাঠানো হচ্ছে...' : 'Sending OTP...')
                : (lang === 'bn' ? 'চালিয়ে যান ও মোবাইল যাচাই করুন →' : 'Continue & Verify Mobile →')}
            </button>
          </div>
        </form>
      </div>

      <OtpModal
        isOpen={showOtp}
        onClose={() => setShowOtp(false)}
        onSuccess={handleOtpSuccess}
        mobile={demographics.parentMobile}
        confirmationResult={confirmationResult}
      />
    </section>
  );
};

export default DemographicsForm;
