// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq-nl8sYq3qLXv3VInQonxnofwN5hlw28",
  authDomain: "journal-app-94943.firebaseapp.com",
  projectId: "journal-app-94943",
  storageBucket: "journal-app-94943.firebasestorage.app",
  messagingSenderId: "628030745865",
  appId: "1:628030745865:web:65d88dd9eb770d631677d8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
