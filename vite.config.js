import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteFirebasePlugin from 'vite-plugin-firebase'; // Import the Firebase plugin

export default defineConfig({
  plugins: [
    react(),
    ViteFirebasePlugin({
      config: {
        apiKey: "AIzaSyCsv69HRs-WLcFs_mPyW0ro24IhyljtJJ4",
        authDomain: "mechat-84663.firebaseapp.com",
        projectId: "mechat-84663",
        storageBucket: "mechat-84663.appspot.com",
        messagingSenderId: "295350545215",
        appId: "1:295350545215:web:d86b9cb5cf7ffb1220818a"
        // Your Firebase config object here
      },
      onFirebaseHosting: true, // Set to true if you're using Firebase Hosting
    }),
  ],
});
