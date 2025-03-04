import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css"; // Custom CSS for modern styling

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      

      {/* Hero Section */}
      <header className="hero-section d-flex flex-column align-items-center justify-content-center text-center text-white">
        <h1 className="hero-title display-1 fw-bold">Next-Gen AI for Everything</h1>
        <p className="hero-subtitle lead">Smart, Fast, and Reliable AI-powered solutions tailored for you.</p>
        <button className="btn btn-primary btn-lg mt-3 shadow-lg">Start Exploring</button>
      </header>

      {/* Interactive Search Section */}
      <section className="container search-section text-center my-5 py-5">
        <h2 className="display-4 fw-bold">How can AI assist you today?</h2>
        <input
          type="text"
          className="form-control mt-3 search-input p-3 shadow-sm"
          placeholder="Ask anything... e.g., 'Generate a marketing plan'"
        />
      </section>

      {/* AI Features Section */}
      <section className="container my-5 py-5 text-center">
        <h2 className="display-4 fw-bold">Powerful AI Capabilities</h2>
        <div className="row mt-4">
          <div className="col-md-4 feature-card p-4 shadow-sm">
            <h4 className="fw-bold">🤖 AI Chat & Assistance</h4>
            <p>Get real-time AI-powered chat assistance.</p>
          </div>
          <div className="col-md-4 feature-card p-4 shadow-sm">
            <h4 className="fw-bold">📊 Data Analysis & Insights</h4>
            <p>Unlock powerful insights with AI-driven analytics.</p>
          </div>
          <div className="col-md-4 feature-card p-4 shadow-sm">
            <h4 className="fw-bold">🛠️ AI Code Generation</h4>
            <p>Generate and debug code with AI instantly.</p>
          </div>
        </div>
      </section>

      {/* AI Applications */}
      <section className="container my-5 py-5 text-center">
        <h2 className="display-4 fw-bold">AI Applications Across Industries</h2>
        <div className="row mt-4">
          <div className="col-md-4 app-card p-4 shadow-sm">
            <h4 className="fw-bold">🏥 Healthcare AI</h4>
            <p>AI-driven diagnostics, patient monitoring, and drug discovery.</p>
          </div>
          <div className="col-md-4 app-card p-4 shadow-sm">
            <h4 className="fw-bold">💼 Business & Marketing</h4>
            <p>Optimize marketing campaigns and automate customer service.</p>
          </div>
          <div className="col-md-4 app-card p-4 shadow-sm">
            <h4 className="fw-bold">🚗 AI in Automation</h4>
            <p>Self-driving technologies, robotics, and industrial automation.</p>
          </div>
        </div>
      </section>

      {/* AI Demo */}
      <section className="ai-demo-section text-center py-5 text-white">
        <h2 className="display-4 fw-bold">Try AI in Action</h2>
        <p className="lead">Experience real-time AI processing and responses.</p>
        <button className="btn btn-success btn-lg mt-3 shadow-lg">Start AI Demo</button>
      </section>

      {/* Testimonials */}
      <section className="container my-5 py-5 text-center">
        <h2 className="display-4 fw-bold">What Our Users Say</h2>
        <div className="row mt-4">
          <div className="col-md-4 testimonial-card p-4 shadow-sm">
            <p className="lead">"AI Solutions transformed my workflow! Highly recommended."</p>
            <h5>- John Doe, Developer</h5>
          </div>
          <div className="col-md-4 testimonial-card p-4 shadow-sm">
            <p className="lead">"The best AI-powered platform for businesses and creators."</p>
            <h5>- Sarah Smith, Marketer</h5>
          </div>
          <div className="col-md-4 testimonial-card p-4 shadow-sm">
            <p className="lead">"Incredible AI features, super fast, and easy to use!"</p>
            <h5>- Alex Johnson, Entrepreneur</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
