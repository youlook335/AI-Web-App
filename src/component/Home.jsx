import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1>AI-Powered Conversations at Your Fingertips</h1>
        <p>Experience the power of AI for smart and engaging conversations.</p>
        <button className="btn btn-light btn-lg mt-3">Try Now</button>
      </header>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Features</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <h4>🚀 Smart AI Responses</h4>
            <p>Get intelligent and instant replies.</p>
          </div>
          <div className="col-md-3">
            <h4>🔒 Secure & Private</h4>
            <p>Your data is fully protected.</p>
          </div>
          <div className="col-md-3">
            <h4>🌍 Multi-Language Support</h4>
            <p>Chat in various languages.</p>
          </div>
          <div className="col-md-3">
            <h4>⚡ Fast & Efficient</h4>
            <p>Seamless and quick chat experience.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>How It Works</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <h5>1. Sign Up</h5>
              <p>Create an account to start chatting.</p>
            </div>
            <div className="col-md-4">
              <h5>2. Enter Your Query</h5>
              <p>Ask anything from our AI-powered chatbot.</p>
            </div>
            <div className="col-md-4">
              <h5>3. Get Instant AI Responses</h5>
              <p>Receive accurate and helpful replies instantly.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
