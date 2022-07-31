// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc8zBVGH8c3SZu0hK9vFLd_PhU31A_83o",
  authDomain: "todos-3554a.firebaseapp.com",
  projectId: "todos-3554a",
  storageBucket: "todos-3554a.appspot.com",
  messagingSenderId: "486832417626",
  appId: "1:486832417626:web:94dd3df0ad4564ea0aa163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth