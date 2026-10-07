/**
 * src/services/firebaseAuth.js
 *
 * Firebase Phone Authentication service.
 *
 * RecaptchaVerifier is intentionally NOT managed here.
 * It must be created in the component that owns the DOM element
 * and passed into sendOtp() as a parameter.
 */

import { signInWithPhoneNumber } from 'firebase/auth';
import { auth, firebaseReady } from '../config/firebase.js';

/**
 * Send an OTP SMS via Firebase Phone Auth.
 *
 * @param {string} phoneNumber      – E.164 format e.g. "+8801712345678"
 * @param {RecaptchaVerifier} verifier – Created and managed by the calling component
 * @returns {Promise<ConfirmationResult>}
 */
export const sendOtp = async (phoneNumber, verifier) => {
  if (!firebaseReady || !auth) {
    const error = new Error('Firebase auth is not configured. Check the frontend .env file.');
    error.code = 'auth/configuration-not-ready';
    throw error;
  }

  if (!verifier) {
    const error = new Error('A valid reCAPTCHA verifier is required before sending OTP.');
    error.code = 'auth/recaptcha-not-ready';
    throw error;
  }

  return signInWithPhoneNumber(auth, phoneNumber, verifier);
};

/**
 * Verify the OTP entered by the user.
 *
 * @param {ConfirmationResult} confirmationResult – Returned by sendOtp()
 * @param {string} otpCode – 6-digit code entered by the user
 * @returns {Promise<UserCredential>}
 */
export const confirmOtp = async (confirmationResult, otpCode) => {
  const credential = await confirmationResult.confirm(otpCode);
  return credential;
};

/**
 * Get the Firebase ID Token for the currently signed-in user.
 *
 * @param {boolean} forceRefresh – Pass true to force-refresh before API calls
 * @returns {Promise<string|null>}
 */
export const getIdToken = async (forceRefresh = false) => {
  const user = auth?.currentUser;
  if (!user) return null;
  return user.getIdToken(forceRefresh);
};

/**
 * Sign out the current Firebase user.
 */
export const signOut = async () => {
  if (!auth) return;
  return auth.signOut();
};
