// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvxT9sUALL_SbthxxUuQWnQn3RuRzKUM",
  authDomain: "bootprees-ai.firebaseapp.com",
  projectId: "bootprees-ai",
  storageBucket: "bootprees-ai.firebasestorage.app",
  messagingSenderId: "624973079485",
  appId: "1:624973079485:web:1c65ba7315a6251cae28d4",
  measurementId: "G-BC5NVFQL41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);