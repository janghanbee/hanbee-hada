// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7cglDGGGfnVk9v7pmvoAerejoY9fnO8k",
  authDomain: "hanbee-hada.firebaseapp.com",
  projectId: "hanbee-hada",
  storageBucket: "hanbee-hada.appspot.com",
  messagingSenderId: "378208902442",
  appId: "1:378208902442:web:5104e31727b2f43b341253",
  measurementId: "G-E77HC07STB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);