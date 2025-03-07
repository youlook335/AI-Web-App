import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRobot, FaShoppingCart, FaShieldAlt, FaPalette } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary fs-1 mb-4">AI & Technology Blog</h1>
      <div className="row">
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <FaRobot className="me-2" /> Latest Trends in AI
            </div>
            <div className="card-body">
              <p>Artificial Intelligence is revolutionizing industries worldwide. From chatbots to self-driving cars, AI is at the forefront of innovation.</p>
              <ul>
                <li>Natural Language Processing (NLP) advancements</li>
                <li>AI-generated content and its impact</li>
                <li>Ethical concerns surrounding AI decision-making</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <FaShoppingCart className="me-2" /> AI in E-commerce
            </div>
            <div className="card-body">
              <p>AI-powered recommendation engines are transforming online shopping experiences. Businesses are leveraging AI for better personalization.</p>
              <ul>
                <li>Personalized shopping experiences</li>
                <li>Chatbots for customer support</li>
                <li>Automated inventory management</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-danger text-white">
              <FaShieldAlt className="me-2" /> Fraud Detection with AI
            </div>
            <div className="card-body">
              <p>Financial institutions use AI to detect fraudulent transactions. Machine learning algorithms analyze user behavior in real-time.</p>
              <ul>
                <li>Real-time transaction monitoring</li>
                <li>Behavioral analysis for fraud detection</li>
                <li>Blockchain and AI synergy for security</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-warning text-white">
              <FaPalette className="me-2" /> AI in Creative Fields
            </div>
            <div className="card-body">
              <p>AI is pushing the boundaries of creativity by generating art, music, and even writing. Tools like DALL·E and GPT assist artists.</p>
              <ul>
                <li>AI-generated artwork</li>
                <li>Music composition with AI</li>
                <li>Automated content writing</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BlogPage;
