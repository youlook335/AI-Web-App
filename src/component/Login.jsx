import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import "../firebaseConfig"; // Make sure your firebaseConfig.js file is correctly set up

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

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
        <input type="email" className="form-control mb-3" placeholder="Email" />
        <input type="password" className="form-control mb-3" placeholder="Password" />
        <button className="btn btn-primary w-100">Login</button>
        <div className="text-center mt-3">
          <button className="btn btn-danger w-100 mb-2" onClick={handleGoogleLogin}>Login with Google</button>
          <button className="btn btn-dark w-100 mb-2" onClick={handleGithubLogin}>Login with GitHub</button>
          <button className="btn btn-primary w-100" onClick={handleFacebookLogin}>Login with Facebook</button>
        </div>
        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
