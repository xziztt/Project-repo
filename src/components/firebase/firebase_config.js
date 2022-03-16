// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOJp_PQk2XfKpRgBKoYuI_kotIWSHEyoo",
  authDomain: "visualization-189ed.firebaseapp.com",
  projectId: "visualization-189ed",
  storageBucket: "visualization-189ed.appspot.com",
  messagingSenderId: "23832718713",
  appId: "1:23832718713:web:004a0de1738cd38da2d3a8",
  measurementId: "G-VM5QQPQ4R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);