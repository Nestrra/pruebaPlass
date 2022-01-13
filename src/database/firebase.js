import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyACb3V-QiO8MaDxg2tAoN3RZs3VyM5NvhM",
  authDomain: "pruebaplass-43e32.firebaseapp.com",
  projectId: "pruebaplass-43e32",
  storageBucket: "pruebaplass-43e32.appspot.com",
  messagingSenderId: "590106085097",
  appId: "1:590106085097:web:ebc5a99290b6b3c458d278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

    

