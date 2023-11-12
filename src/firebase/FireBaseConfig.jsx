import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1IK6GiFAG2_ivsI96SnYsA9OL1b9pzR4",
  authDomain: "e-commerce-application-19fbf.firebaseapp.com",
  projectId: "e-commerce-application-19fbf",
  storageBucket: "e-commerce-application-19fbf.appspot.com",
  messagingSenderId: "918708425346",
  appId: "1:918708425346:web:656cd04ab6ec6ea03e1a9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
