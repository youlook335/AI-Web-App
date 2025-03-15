// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyByvxT9sUALL_SbthxxUuQWnQn3RuRzKUM",
  authDomain: "bootprees-ai.firebaseapp.com",
  projectId: "bootprees-ai",
  storageBucket: "bootprees-ai.appspot.com", // ✅ یہاں ".app" نہیں بلکہ ".appspot.com" ہونا چاہیے!
  messagingSenderId: "624973079485",
  appId: "1:624973079485:web:1c65ba7315a6251cae28d4",
  measurementId: "G-BC5NVFQL41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Auth
const auth = getAuth(app);

// ✅ Export auth (اب main.jsx میں import کیا جا سکتا ہے)
export { auth };
