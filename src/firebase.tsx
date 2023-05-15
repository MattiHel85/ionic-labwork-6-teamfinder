// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKoc6GvIVnADMGHGNaYo9ZoL6XMNr6Hg8",
  authDomain: "react-app-2023-780b2.firebaseapp.com",
  projectId: "react-app-2023-780b2",
  storageBucket: "react-app-2023-780b2.appspot.com",
  messagingSenderId: "664571859224",
  appId: "1:664571859224:web:81b2b8edf44066808b0e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);