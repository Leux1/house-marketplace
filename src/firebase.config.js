import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUTrYYO4yHcIIFI66IZ0X84sihD0NIv4I",
  authDomain: "house-marketplace-app-90278.firebaseapp.com",
  projectId: "house-marketplace-app-90278",
  storageBucket: "house-marketplace-app-90278.appspot.com",
  messagingSenderId: "550912668889",
  appId: "1:550912668889:web:b4e78894e2e3615c5a7ac8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
