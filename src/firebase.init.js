// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlb8pmq18AkjmnIAWY4ca21pIzVoNrdHs",
  authDomain: "bicycle-inventory.firebaseapp.com",
  projectId: "bicycle-inventory",
  storageBucket: "bicycle-inventory.appspot.com",
  messagingSenderId: "975793268628",
  appId: "1:975793268628:web:9f0f90e28a2d8e9d8b9181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;