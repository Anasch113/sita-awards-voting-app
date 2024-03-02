
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import  { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyA3M-PsSoFcVWXPtv6fJpDVrdGFXcFYDww",
  authDomain: "sita-awards.firebaseapp.com",
  projectId: "sita-awards",
  storageBucket: "sita-awards.appspot.com",
  messagingSenderId: "1049380426838",
  appId: "1:1049380426838:web:3b99f727e40276006517f7",
  measurementId: "G-N0J0298Q15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
