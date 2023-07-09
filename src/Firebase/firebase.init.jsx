// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTCIm95DEh6L6sp9NpRVBwwbaD8gr5OdU",
  authDomain: "simple-firebase-auth-46de4.firebaseapp.com",
  projectId: "simple-firebase-auth-46de4",
  storageBucket: "simple-firebase-auth-46de4.appspot.com",
  messagingSenderId: "619902908781",
  appId: "1:619902908781:web:22c5bc25777b810c460264",
  measurementId: "G-95VFYD0D4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app