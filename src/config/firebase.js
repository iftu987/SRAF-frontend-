/**
 * src/config/firebase.js
 *
 * Firebase Client SDK initialization.
 *
 * Variable names match the Vercel environment variable dashboard exactly
 * (no VITE_ prefix). Vite exposes them via import.meta.env because
 * 'FIREBASE_' is listed in envPrefix inside vite.config.js.
 *
 * Set these in Vercel → Project Settings → Environment Variables:
 *   FIREBASE_API_KEY
 *   FIREBASE_AUTH_DOMAIN
 *   FIREBASE_PROJECT_ID
 *   FIREBASE_STORAGE_BUCKET
 *   FIREBASE_MESSAGING_SENDER_ID
 *   FIREBASE_APP_ID
 */

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:            import.meta.env.FIREBASE_API_KEY,
  authDomain:        import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.FIREBASE_APP_ID,
};

const missingEnvKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => typeof value !== 'string' || value.trim() === '')
  .map(([key]) => key);

if (missingEnvKeys.length > 0) {
  console.warn('[Firebase] Missing environment values:', missingEnvKeys.join(', '));
}

export const firebaseReady = missingEnvKeys.length === 0;

// Guard against duplicate initialization during HMR (Vite hot-reload).
const app = firebaseReady
  ? (getApps().find(({ name }) => name === '[DEFAULT]') || initializeApp(firebaseConfig))
  : null;

export const auth = app ? getAuth(app) : null;
export default app;
