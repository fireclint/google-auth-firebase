// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARDxTt_esCUrf_V296hbHxqNy0Q7Uy_n8",
  authDomain: "auth-y-67c56.firebaseapp.com",
  projectId: "auth-y-67c56",
  storageBucket: "auth-y-67c56.appspot.com",
  messagingSenderId: "439098259366",
  appId: "1:439098259366:web:3d5691310f02fac9150167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
