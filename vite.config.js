import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Expose env vars with these prefixes to the browser via import.meta.env
  // Default is only 'VITE_'. Adding 'FIREBASE_' and 'API_' lets us match
  // the Vercel environment variable names exactly (no VITE_ prefix needed).
  envPrefix: ['VITE_', 'FIREBASE_', 'API_'],

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true
      }
    }
  }
});
