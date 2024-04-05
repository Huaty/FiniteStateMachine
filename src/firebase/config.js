import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOuFPiJwlS5rOkfY3JSUsYnrSiOdCA8wk",
  authDomain: "finalyearproject-187a0.firebaseapp.com",
  projectId: "finalyearproject-187a0",
  storageBucket: "finalyearproject-187a0.appspot.com",
  messagingSenderId: "443238084465",
  appId: "1:443238084465:web:baa6bcb1a5cb024941d0d0",
  measurementId: "G-7HLHERLZ0L",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
