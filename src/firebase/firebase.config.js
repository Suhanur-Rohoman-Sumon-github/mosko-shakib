// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO:add env file

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOl3tXZTAxu7IAeHDbI9nAXM0bVcCVOnI",
  authDomain: "mosko-shakib.firebaseapp.com",
  projectId: "mosko-shakib",
  storageBucket: "mosko-shakib.appspot.com",
  messagingSenderId: "154884678687",
  appId: "1:154884678687:web:7cc755e3330b43c030e12a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);