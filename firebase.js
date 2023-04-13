// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDU1T3ZxGJpm7QLB1onf-tCQ4FxOjkOX0",
  authDomain: "koorujam.firebaseapp.com",
  projectId: "koorujam",
  storageBucket: "koorujam.appspot.com",
  messagingSenderId: "679626952684",
  appId: "1:679626952684:web:42900004c976629302bac9",
  measurementId: "G-G5M5ZP3BFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);