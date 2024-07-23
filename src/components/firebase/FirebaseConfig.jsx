import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyCWl7rjD_ZtZCrb8O-FEKBSE6oaRLXw3kA",
  authDomain: "ecommerse-df30a.firebaseapp.com",
  projectId: "ecommerse-df30a",
  storageBucket: "ecommerse-df30a.appspot.com",
  messagingSenderId: "579572572502",
  appId: "1:579572572502:web:ddbefa3c7894d236a876f7",
  measurementId: "G-TWGT184E0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)
export {fireDB, auth}