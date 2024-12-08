import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Ofo_jmo33Fe64G4A7PJ_9L2nhrefDPE",
  authDomain: "clone-a881a.firebaseapp.com",
  projectId: "clone-a881a",
  storageBucket: "clone-a881a.firebasestorage.app",
  messagingSenderId: "181538074341",
  appId: "1:181538074341:web:59cb90cdc62c42dcdcae0c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore();