import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import "../firebaseConfig"; // Make sure you have a firebaseConfig.js file with your Firebase setup
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Signed up with Google successfully!");
        } catch (error) {
            console.error("Google Signup Error:", error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg w-50">
                <h2 className="text-center mb-4">Sign Up</h2>
                <input type="text" className="form-control mb-3" placeholder="Full Name" />
                <input type="email" className="form-control mb-3" placeholder="Email" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
                <input type="password" className="form-control mb-3" placeholder="Confirm Password" />
                <button className="btn btn-success w-100">Sign Up</button>
                <div className="text-center mt-3">
                    <button className="btn btn-danger w-100 mb-2" style={{
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

                    }} onClick={handleGoogleSignup}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ9p0kwWYIU-O7dnjXUwIBnxItQb08fMMBQ&s"
                            alt="Google logo"
                            style={{ width: "20px", height: "20px" }}
                        />                        Sign Up with Google
                    </button>
                </div>
                <p className="text-center mt-2">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
