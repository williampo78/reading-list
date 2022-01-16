import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzEH9cCb3P6eE1WeSM0lq5ON72dMXuJx8",
  authDomain: "reading-list-80f65.firebaseapp.com",
  projectId: "reading-list-80f65",
  storageBucket: "reading-list-80f65.appspot.com",
  messagingSenderId: "92138158975",
  appId: "1:92138158975:web:367f6a45bad3b7ad5ef84a",
};

//init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

export { db, auth };
