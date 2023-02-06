// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_8JVPTzadV0SPWphOSKzkk1hFQVN1d7E",
  authDomain: "eshopv2-a2b07.firebaseapp.com",
  projectId: "eshopv2-a2b07",
  storageBucket: "eshopv2-a2b07.appspot.com",
  messagingSenderId: "156386911268",
  appId: "1:156386911268:web:21881437b722eda0d4e4b1",
  measurementId: "G-97C47GDNW1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;