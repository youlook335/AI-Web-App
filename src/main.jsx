import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Translater from "./Translater.tsx";
import WhatsAppButton from "./WhatsAppButton.tsx";
import Login from "../src/component/Login.jsx"; // اپنا لاگ ان پیج امپورٹ کریں
import { auth } from "./firebaseConfig.js"; // Firebase config امپورٹ کریں
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Main = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      {user ? (
        <>
          <Navbar />
          <App />
          <Footer />
          <Translater />
          <WhatsAppButton />
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
