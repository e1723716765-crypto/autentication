// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd2DzypVzQbvQzxdrzrk5frfFEvgchm-I",
  authDomain: "authenticatiom-app.firebaseapp.com",
  projectId: "authenticatiom-app",
  storageBucket: "authenticatiom-app.firebasestorage.app",
  messagingSenderId: "454029415819",
  appId: "1:454029415819:web:cc799f2c6c6a6ccfb84b8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);