import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "shoppersite-eacab.firebaseapp.com",
  projectId: "shoppersite-eacab",
  storageBucket: "shoppersite-eacab.appspot.com",
  messagingSenderId: "341788535452",
  appId: import.meta.env.VITE_appId
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB, auth } ;