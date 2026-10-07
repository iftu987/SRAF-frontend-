/**
 * src/config/firebase.js
 *
 * Firebase Client SDK initialization.
 *
 * All VITE_FIREBASE_* variables are PUBLIC values from the Firebase Console
 * (Project Settings → General → Your apps → Web app → Config).
 * They are safe to include in frontend code — they identify your project
 * but do NOT grant any elevated access on their own.
 *
 * Add these to your frontend/.env file:
 *
 *   VITE_FIREBASE_API_KEY=AIzaSy...
 *   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
 *   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
 *   VITE_FIREBASE_APP_ID=1:123456789:web:abc123
 *
 * (VITE_ prefix is required by Vite to expose env vars to the browser)
 */

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

// Guard against duplicate initialization during HMR (Vite hot-reload)
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const auth = getAuth(app);
export default app;
