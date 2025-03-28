import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import "../firebaseConfig"; // Firebase config import

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google successfully!");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      alert("Logged in with GitHub successfully!");
    } catch (error) {
      console.error("GitHub Login Error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Logged in with Facebook successfully!");
    } catch (error) {
      console.error("Facebook Login Error:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg w-50">
        <h2 className="text-center mb-4">Login</h2>
        <h2 className="text-center mb-4">Only Use a Sign in Google </h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="❌ Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="❌ Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <button style={{
            backgroundColor: "#FFFFFF",
            border: "2px solid #ddd",
            color: "#5F6368",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "10px 15px",
            borderRadius: "20px",
            cursor: "pointer"

          }} className="btn btn-danger w-100 mb-2" onClick={handleGoogleLogin}>
            ✅
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ9p0kwWYIU-O7dnjXUwIBnxItQb08fMMBQ&s"
              alt="Google logo"
              style={{ width: "20px", height: "20px" }}
            />  Login with Google
          </button>
          <button style={{
            backgroundColor: "#FFFFFF",
            border: "2px solid #ddd",
            color: "#5F6368",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "10px 15px",
            borderRadius: "20px",
            cursor: "pointer"

          }} className="btn btn-dark w-100 mb-2" onClick={handleGithubLogin}>
            ❌
            <img
              src="https://logolook.net/wp-content/uploads/2022/12/GitHub-Emblem.png"
              alt="Google logo"
              style={{ width: "40px", height: "20px" }}
            />  Login with GitHub
          </button>

        </div>

        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
