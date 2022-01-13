import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyArUlcnv7D0S_6fhsTDhV7Sy4uUX83-f3k",
    authDomain: "pruebaplass-f7dc9.firebaseapp.com",
    projectId: "pruebaplass-f7dc9",
    storageBucket: "pruebaplass-f7dc9.appspot.com",
    messagingSenderId: "92741074220",
    appId: "1:92741074220:web:982bc8ab095ecc4b2c4089"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

    

