// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuXDj-a8UEZenHs1wvTr0dJf45J3mP2jg",
  authDomain: "bubble-f7c1e.firebaseapp.com",
  projectId: "bubble-f7c1e",
  storageBucket: "bubble-f7c1e.appspot.com",
  messagingSenderId: "500826920411",
  appId: "1:500826920411:web:ad88d42f657b57615643fe",
  measurementId: "G-9WKF5ECXC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
