// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFgtL-lCkpiE2p15hYT26uMLdCYG0TiCo",
  authDomain: "locommerce-auth.firebaseapp.com",
  projectId: "locommerce-auth",
  storageBucket: "locommerce-auth.appspot.com",
  messagingSenderId: "260451495273",
  appId: "1:260451495273:web:cd565e1f653faaf6f461f8",
  measurementId: "G-RWRFBEZDD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);