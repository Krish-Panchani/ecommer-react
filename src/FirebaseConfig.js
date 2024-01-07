// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "#",
  authDomain: "#",
  projectId: "#-auth",
  storageBucket: "#",
  messagingSenderId: "3",
  appId: "#",
  measurementId: "#"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
