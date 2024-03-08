import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDktZJBzFVG1V2MTkk3BV8mRnw9AHYJi1w",
  authDomain: "chat-app-519dc.firebaseapp.com",
  projectId: "chat-app-519dc",
  storageBucket: "chat-app-519dc.appspot.com",
  messagingSenderId: "950807525656",
  appId: "1:950807525656:web:ca4f207f34567bd977c66d",
  measurementId: "G-FY3TGXNVLH"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
