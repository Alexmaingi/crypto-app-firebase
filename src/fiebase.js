// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtMnz_m-rx4Rn3xbmQdk7VA5CdDLqOWx8",
  authDomain: "crypto-app-firebase-81c30.firebaseapp.com",
  projectId: "crypto-app-firebase-81c30",
  storageBucket: "crypto-app-firebase-81c30.appspot.com",
  messagingSenderId: "264033362385",
  appId: "1:264033362385:web:7d9a3595e1260587a800f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
