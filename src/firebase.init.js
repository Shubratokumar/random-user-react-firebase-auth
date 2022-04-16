// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuXgxln7iiSHgFJAhKCTAr9PNt-7GCH0I",
  authDomain: "react-firebase-with-router.firebaseapp.com",
  projectId: "react-firebase-with-router",
  storageBucket: "react-firebase-with-router.appspot.com",
  messagingSenderId: "400957459225",
  appId: "1:400957459225:web:3ff7b1a36f30de76239388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;