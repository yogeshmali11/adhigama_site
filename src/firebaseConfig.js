// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCWnsaoGtiUCk4lmlKcWHBibFIDDvfIT8",
  authDomain: "adhigama-site.firebaseapp.com",
  projectId: "adhigama-site",
  storageBucket: "adhigama-site.firebasestorage.app",
  messagingSenderId: "595357234348",
  appId: "1:595357234348:web:2bcb26c8a972fcd615db09",
  measurementId: "G-CTHWQCY8G4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
