// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVOreFMHMOQX_UbQltIkLoYm3vKN1kGIY",
  authDomain: "funflix-gpt.firebaseapp.com",
  projectId: "funflix-gpt",
  storageBucket: "funflix-gpt.appspot.com",
  messagingSenderId: "1034580316960",
  appId: "1:1034580316960:web:0a85be3b67b5e38ec17d45",
  measurementId: "G-CY82HGEX65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);