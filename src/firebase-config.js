// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCm5GX8b1106HmDGwGB23eVelQoBo7TckI",
  authDomain: "gui-transpo.firebaseapp.com",
  projectId: "gui-transpo",
  storageBucket: "gui-transpo.appspot.com",
  messagingSenderId: "732567530193",
  appId: "1:732567530193:web:1c5181dd74c5102df7f3f0",
  measurementId: "G-E9CY4C5RME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);