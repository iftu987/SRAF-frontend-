/**
 * src/services/firebaseAuth.js
 *
 * Firebase Phone Authentication service.
 *
 * Provides two functions that mirror the old authService shape so that
 * components need minimal changes:
 *
 *   sendOtp(phoneNumber)            → returns a Firebase ConfirmationResult
 *   confirmOtp(confirmationResult, otpCode) → returns a Firebase UserCredential
 *
 * Phone number must be in E.164 format: +countrycode followed by number
 * Example: +8801712345678 (Bangladesh), +919876543210 (India)
 *
 * reCAPTCHA
 * ─────────
 * Firebase Phone Auth requires a reCAPTCHA challenge to prevent SMS abuse.
 * We use an INVISIBLE RecaptchaVerifier which auto-solves in the background
 * without any user interaction in most cases.
 *
 * The verifier is attached to a DOM element with id="recaptcha-container"
 * which must exist in the page. DemographicsForm renders this invisible div.
 */

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from '../config/firebase.js';

let recaptchaVerifier = null;

/**
 * Initialize (or re-use) an invisible RecaptchaVerifier.
 * Safe to call multiple times — reuses the existing instance.
 */
const getRecaptchaVerifier = () => {
  if (recaptchaVerifier) return recaptchaVerifier;

  recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    size: 'invisible',
    callback: () => {
      // reCAPTCHA solved — signInWithPhoneNumber will proceed automatically
    },
    'expired-callback': () => {
      // Token expired — reset so it gets recreated on next attempt
      recaptchaVerifier = null;
    },
  });

  return recaptchaVerifier;
};

/**
 * Send an OTP SMS to the given phone number using Firebase Phone Auth.
 *
 * @param {string} phoneNumber – E.164 format, e.g. "+8801712345678"
 * @returns {Promise<ConfirmationResult>} – Pass to confirmOtp() after user enters code
 */
export const sendOtp = async (phoneNumber) => {
  const verifier = getRecaptchaVerifier();
  const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, verifier);
  return confirmationResult;
};

/**
 * Verify the OTP entered by the user.
 *
 * @param {ConfirmationResult} confirmationResult – Returned by sendOtp()
 * @param {string} otpCode – 6-digit code entered by the user
 * @returns {Promise<UserCredential>} – Contains .user with uid, phoneNumber, getIdToken()
 */
export const confirmOtp = async (confirmationResult, otpCode) => {
  const credential = await confirmationResult.confirm(otpCode);
  return credential;
};

/**
 * Get the Firebase ID Token for the currently signed-in user.
 * Pass forceRefresh=true to always get a fresh token (recommended before API calls).
 *
 * @param {boolean} forceRefresh
 * @returns {Promise<string|null>}
 */
export const getIdToken = async (forceRefresh = false) => {
  const user = auth.currentUser;
  if (!user) return null;
  return user.getIdToken(forceRefresh);
};

/**
 * Sign out the current Firebase user.
 */
export const signOut = async () => {
  return auth.signOut();
};
