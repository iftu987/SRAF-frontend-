/**
 * src/services/firebaseAuth.js
 *
 * Firebase Phone Authentication service.
 *
 * RecaptchaVerifier is intentionally NOT managed here.
 * It must be created in the component that owns the DOM element
 * (#recaptcha-container) using useEffect + useRef, and passed
 * into sendOtp() as a parameter.
 *
 * This avoids the "e is not a function" TypeError caused by React
 * re-renders detaching the DOM node that the verifier is bound to.
 */

import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../config/firebase.js';

/**
 * Send an OTP SMS via Firebase Phone Auth.
 *
 * @param {string} phoneNumber      – E.164 format e.g. "+8801712345678"
 * @param {RecaptchaVerifier} verifier – Created and managed by the calling component
 * @returns {Promise<ConfirmationResult>}
 */
export const sendOtp = async (phoneNumber, verifier) => {
  const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, verifier);
  return confirmationResult;
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
