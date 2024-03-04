import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPqcIIgRUX1yR-sLX--SQUyVwSgSgoRw0",
  authDomain: "chat-app-2f1a9.firebaseapp.com",
  projectId: "chat-app-2f1a9",
  storageBucket: "chat-app-2f1a9.appspot.com",
  messagingSenderId: "412118110816",
  appId: "1:412118110816:web:1481973521be192105a905",
  measurementId: "G-896SJRP6EX",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
