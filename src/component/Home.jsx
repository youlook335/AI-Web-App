import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">AI Solutions</a>
          <button className="btn btn-light" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5">
        <h1>AI-Powered Solutions for Your Business</h1>
        <p>Transform your workflow with cutting-edge AI technologies.</p>
        <button className="btn btn-primary btn-lg mt-3">Get Started</button>
      </header>

      {/* How We Can Help Section */}
      <section className="container my-5 text-center">
        <h2>How We Can Help You?</h2>
        <p>Our AI platform is designed to enhance your efficiency and problem-solving capabilities.</p>
        <div className="row mt-4">
          <div className="col-md-4">
            <h4>💡 Smart Decision Making</h4>
            <p>Our AI helps analyze data and provides intelligent recommendations.</p>
          </div>
          <div className="col-md-4">
            <h4>🖥️ Automated Workflows</h4>
            <p>Optimize and automate repetitive tasks with AI-driven solutions.</p>
          </div>
          <div className="col-md-4">
            <h4>📊 Data Analysis & Insights</h4>
            <p>Extract valuable insights from your data in real-time.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Features</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <h4>🤖 AI-Powered Assistance</h4>
            <p>Get support with our intelligent AI assistant.</p>
          </div>
          <div className="col-md-3">
            <h4>🔄 Seamless Integrations</h4>
            <p>Connect AI tools effortlessly with your existing software.</p>
          </div>
          <div className="col-md-3">
            <h4>🛠️ Custom AI Solutions</h4>
            <p>Personalized AI features tailored to your needs.</p>
          </div>
          <div className="col-md-3">
            <h4>🔍 AI-Powered Search</h4>
            <p>Find relevant information faster than ever.</p>
          </div>
        </div>
      </section>

      {/* API & Integration Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>API & Integrations</h2>
          <p>Seamlessly integrate AI capabilities into your applications.</p>
          <button className="btn btn-secondary mt-3">Learn More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>© 2025 AI Solutions | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default Home;
