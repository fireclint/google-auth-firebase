// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR FIREBASE API KEY",
  authDomain: "YOUR FIREBASE AUTHDOMAIN",
  projectId: "YOUR FIREBASE PROJECTID",
  storageBucket: "YOUR FIREBASE STORAGE BUCKET",
  messagingSenderId: "YOUR FIREBASE MESSAGESENDER ID",
  appId: "YOUR FIREBASE APPID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
