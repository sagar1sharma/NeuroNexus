import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "careeradventure-7d8c1.firebaseapp.com",
  projectId: "careeradventure-7d8c1",
  storageBucket: "careeradventure-7d8c1.appspot.com",
  messagingSenderId: "1018452914022",
  appId: process.env.REACT_APP_app_id
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB, auth } ;