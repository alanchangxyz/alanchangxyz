import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_APIKEY,
  authDomain: process.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECTID,
  storageBucket: process.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VITE_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { app, auth };