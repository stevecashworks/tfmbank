// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlbb7HOriBKmTWWKo6AeX_S8dSGUvFqBs",
  authDomain: "tfmbank-38ad9.firebaseapp.com",
  projectId: "tfmbank-38ad9",
  storageBucket: "tfmbank-38ad9.appspot.com",
  messagingSenderId: "981672019656",
  appId: "1:981672019656:web:9d60a8e7e98d56966947fd"
};

// Initialize Firebase
const firebase_App = initializeApp(firebaseConfig);
export default   firebase_App