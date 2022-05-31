// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgrjKNfh0kJPv7uiiTydH1zJkbG3n4HTo",
  authDomain: "otp-auth-389a6.firebaseapp.com",
  databaseURL: "https://otp-auth-389a6-default-rtdb.firebaseio.com",
  projectId: "otp-auth-389a6",
  storageBucket: "otp-auth-389a6.appspot.com",
  messagingSenderId: "1097539130841",
  appId: "1:1097539130841:web:1087b9e11ec06aff7c35c8",
  measurementId: "G-HZ8VC10L9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);