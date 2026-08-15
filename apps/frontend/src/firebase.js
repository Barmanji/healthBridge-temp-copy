// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOm6KE-MJPZX3xjtpCixDoVHY5vu_w5A",
  authDomain: "fir-4a8c0.firebaseapp.com",
  projectId: "fir-4a8c0",
  storageBucket: "fir-4a8c0.firebasestorage.app",
  messagingSenderId: "833107051993",
  appId: "1:833107051993:web:1ef909f0fc40b24c08c5c8",
  measurementId: "G-6WZGKX65Z2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

export { auth };
