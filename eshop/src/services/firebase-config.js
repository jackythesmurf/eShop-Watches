// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAEmGpmhOsVyJcba63y4c8-G2_4bDDQPU4",

  authDomain: "eshop-81128.firebaseapp.com",

  projectId: "eshop-81128",

  storageBucket: "eshop-81128.appspot.com",

  messagingSenderId: "807143950871",

  appId: "1:807143950871:web:a1356b2fd31ccfb1012a52",

  measurementId: "G-5EK8TND477"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;