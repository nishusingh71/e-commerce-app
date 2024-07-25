// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtT2X_MMS2afFJbG5yJB4qzcg6XjWxniU",
  authDomain: "ogani-a7961.firebaseapp.com",
  projectId: "ogani-a7961",
  storageBucket: "ogani-a7961.appspot.com",
  messagingSenderId: "670510244837",
  appId: "1:670510244837:web:1848ed1a09c1e76ec6450c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
