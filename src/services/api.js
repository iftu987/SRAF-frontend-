/**
 * src/services/api.js
 *
 * Axios API client for the SRAF backend.
 *
 * Changes from the old version:
 * ──────────────────────────────
 * - Added a request interceptor that automatically attaches the Firebase ID Token
 *   as "Authorization: Bearer <token>" on every request.
 * - Updated assessmentService to use the correct backend endpoints:
 *     POST /api/assessment  (was /api/assessments — backend only has /assessment)
 *     GET  /api/profile     (was /api/assessments/parent/:mobile)
 * - authService methods are kept for reference but no longer call the backend
 *   for OTP; they call the Firebase service instead (see DemographicsForm).
 */

import axios from 'axios';
import { getIdToken } from './firebaseAuth.js';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// ─── Request Interceptor ──────────────────────────────────────────────────────
// Automatically attach the Firebase ID Token to every outgoing request.
// If there is no signed-in Firebase user the header is simply omitted
// (public endpoints like /health still work; protected ones will return 401).
apiClient.interceptors.request.use(async (config) => {
  try {
    const idToken = await getIdToken(false);
    if (idToken) {
      config.headers['Authorization'] = `Bearer ${idToken}`;
    }
  } catch {
    // No user signed in — continue without the header
  }
  return config;
});

// ─── Response Interceptor ─────────────────────────────────────────────────────
// On a 401 with an expired-token code, force-refresh the token and retry once.
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const data = error.response?.data;

    if (
      error.response?.status === 401 &&
      data?.code === 'auth/id-token-expired' &&
      !originalRequest._retried
    ) {
      originalRequest._retried = true;
      try {
        const freshToken = await getIdToken(true); // force-refresh
        if (freshToken) {
          originalRequest.headers['Authorization'] = `Bearer ${freshToken}`;
          return apiClient(originalRequest);
        }
      } catch {
        // Refresh failed — fall through to original rejection
      }
    }

    return Promise.reject(error);
  }
);

// ─── Assessment Service ───────────────────────────────────────────────────────
// Calls the actual backend endpoints (auth token is injected by the interceptor)
export const assessmentService = {
  /**
   * Submit a completed assessment to the backend.
   * Backend route: POST /api/assessment
   * Requires: Authorization: Bearer <firebase-id-token>
   */
  submit: async (payload) => {
    const response = await apiClient.post('/assessment', payload);
    return response.data;
  },

  /**
   * Retrieve the profile/assessment history for the authenticated user.
   * Backend route: GET /api/profile
   * Requires: Authorization: Bearer <firebase-id-token>
   */
  getProfile: async () => {
    const response = await apiClient.get('/profile');
    return response.data;
  },
};

// ─── Auth Token Verification (debug/testing utility) ─────────────────────────
export const authService = {
  /**
   * Ask the backend to verify the current Firebase ID Token.
   * Useful for confirming backend connectivity after sign-in.
   */
  verifyToken: async (idToken) => {
    const response = await apiClient.post('/auth/verify-token', { idToken });
    return response.data;
  },
};

export default apiClient;
