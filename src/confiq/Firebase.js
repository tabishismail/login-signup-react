import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAVE60MkIpeTwjQw6noa-yN6n-enQ4YBa0",
    authDomain: "my-practice-fa941.firebaseapp.com",
    projectId: "my-practice-fa941",
    storageBucket: "my-practice-fa941.appspot.com",
    messagingSenderId: "594927001961",
    appId: "1:594927001961:web:e940fd90169f2d1eceddf8"
  };

  initializeApp(firebaseConfig)

  const auth = getAuth();
  
  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };