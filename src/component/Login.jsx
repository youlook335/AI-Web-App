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

          }} className="btn btn-danger w-100 mb-2" onClick={handleGoogleLogin}><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ9p0kwWYIU-O7dnjXUwIBnxItQb08fMMBQ&s"
              alt="Google logo"
              style={{ width: "20px", height: "20px" }}
            />Login with Google</button>
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
          }} className="btn btn-dark w-100" onClick={handleGithubLogin}><img
              src="https://logolook.net/wp-content/uploads/2022/12/GitHub-Emblem.png"
              alt="Google logo"
              style={{ width: "40px", height: "20px" }}
            /> Login with GitHub</button>
          <br />
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

          }} className="btn btn-primary w-100" onClick={handleFacebookLogin}>
            <img
              src="https://s.yimg.com/ny/api/res/1.2/0osJFgvzW1z0z.oxwXI4qQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/creative_bloq_161/f4eccbe0bc6e1ac587d7ab60c74ba4a4"
              alt="Google logo"
              style={{ width: "50px", height: "30px" }}
            />
            Login with Facebook</button>
        </div>
        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



// app id  1326174438460302


// App secret :b3ff6e7a0a6963b23a675c3a8ef9bf82