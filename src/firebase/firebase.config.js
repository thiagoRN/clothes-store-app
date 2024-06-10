// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcqkPL52U7St_I3QOC-Y-YeF7in3cQq08",
  authDomain: "mern-store-app.firebaseapp.com",
  projectId: "mern-store-app",
  storageBucket: "mern-store-app.appspot.com",
  messagingSenderId: "945159189846",
  appId: "1:945159189846:web:b2d5829dc1275d370992f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;