import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">AI Solutions</a>
          <button className="btn btn-outline-light" onClick={toggleDarkMode}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center d-flex flex-column align-items-center justify-content-center">
        <h1 className="hero-title">Experience Next-Gen AI</h1>
        <p className="hero-subtitle">Powerful AI-driven solutions tailored for you.</p>
        <button className="btn btn-primary btn-lg mt-3">Get Started</button>
      </header>

      {/* Interactive Search Section */}
      <section className="container search-section text-center my-5">
        <h2>How can AI assist you today?</h2>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Ask anything... e.g., 'Generate a business idea'"
        />
      </section>

      {/* AI Features Section */}
      <section className="container my-5 text-center">
        <h2>AI Capabilities</h2>
        <div className="row mt-4">
          <div className="col-md-4 feature-card">
            <h4>🤖 Intelligent Assistance</h4>
            <p>AI-powered chat for real-time queries.</p>
          </div>
          <div className="col-md-4 feature-card">
            <h4>📊 Smart Data Insights</h4>
            <p>Analyze and visualize data efficiently.</p>
          </div>
          <div className="col-md-4 feature-card">
            <h4>🛠️ Code Generation</h4>
            <p>Instant AI-generated code snippets.</p>
          </div>
        </div>
      </section>

      {/* AI Demo */}
      <section className="ai-demo-section text-center py-5">
        <h2>Try AI in Action</h2>
        <p>See how AI generates responses instantly.</p>
        <button className="btn btn-success mt-3">Start Demo</button>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-3">
        <p>© 2025 AI Solutions | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default Home;
