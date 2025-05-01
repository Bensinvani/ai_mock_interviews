import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcyFcnbLLu-kwvyZwQJUAqvOfHFWNM15o",
  authDomain: "prepwise-79f44.firebaseapp.com",
  projectId: "prepwise-79f44",
  storageBucket: "prepwise-79f44.firebasestorage.app",
  messagingSenderId: "870388321783",
  appId: "1:870388321783:web:f8c179b33d428626ce32f2",
  measurementId: "G-LDZKSLLVLE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
