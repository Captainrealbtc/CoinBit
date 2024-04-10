// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMB6c0OowcR8Nk3nzPcjIKyQ0kthj2-l0",
  authDomain: "coinbit-invest.firebaseapp.com",
  projectId: "coinbit-invest",
  storageBucket: "coinbit-invest.appspot.com",
  messagingSenderId: "2309981771",
  appId: "1:2309981771:web:dc17f574469d0499356fce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()