import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button, Card } from "react-bootstrap";
import { 
  FaUserPlus, FaUnlockAlt, FaUserCircle, FaRobot, FaPenFancy, FaImage, 
  FaMicrophone, FaChartBar, FaInfoCircle, FaArrowRight, FaRocket, 
  FaMapPin, FaGem 
} from "react-icons/fa";
import "../../Styles/Support.css";

const Support: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container className="mt-5 text-center">
      <h1 className="mb-4" data-aos="fade-down">
        <FaInfoCircle className="me-2 text-primary" /> Help & Support - AI Web App
      </h1>
      <p data-aos="fade-up">
        Welcome to the AI Web App Help Center! Our AI web application provides cutting-edge <strong>Artificial Intelligence services</strong>. 
        If you encounter any issues, this guide will assist you.
      </p>
      
      <Card className="p-4 shadow-lg mb-4 text-start" data-aos="fade-right">
        <h2 className="mb-3">
          <FaGem className="text-info me-2" /> About Our AI Web App
        </h2>
        <p>
          This web application is powered by <strong>Machine Learning (ML), Natural Language Processing (NLP), Deep Learning Algorithms, 
          and Cloud-based AI Computing</strong>. It aims to provide <strong>AI-powered solutions</strong> that automate tasks and increase productivity.
        </p>
        <p>
          <FaArrowRight className="text-warning me-2" /> Learn more: <a href="#about-ai-web-app">About Our AI Web App</a>
        </p>
      </Card>

      <Card className="p-4 shadow-lg mb-4 text-start" data-aos="fade-left">
        <h2 className="mb-3">
          <FaRocket className="text-danger me-2" /> Getting Started - How to Use the AI Web App?
        </h2>
        <h4>
          <FaUserPlus className="text-success me-2" /> How to Sign Up & Log In?
        </h4>
        <p>
          <FaMapPin className="text-danger me-2" /> <strong>To create an account:</strong>
        </p>
        <ul>
          <li>
            <FaUserPlus className="text-success me-2" /> Visit <a href="#signup-guide">Sign Up</a> and enter your details.
          </li>
          <li>
            <FaUnlockAlt className="text-warning me-2" /> Complete <strong>Email Verification</strong>.
          </li>
          <li>
            <FaUserCircle className="text-primary me-2" /> Log in and access the <strong>Dashboard</strong>.
          </li>
        </ul>
        <Button variant="primary" href="#login-guide" className="m-2">
          <FaUserCircle className="me-2" /> Log In
        </Button>
        <Button variant="outline-danger" href="#reset-password" className="m-2">
          <FaUnlockAlt className="me-2" /> Reset Password
        </Button>
      </Card>

      <h2 className="mt-5" data-aos="zoom-in">
        <FaRobot className="text-primary me-2" /> AI Features & Tools
      </h2>
      
      <Card className="p-4 shadow-lg text-start" data-aos="fade-up">
        <ul className="list-unstyled">
          <li className="mb-3" data-aos="fade-up">
            <FaRobot className="text-primary me-2" /> <strong><a href="#ai-chatbot-guide">AI Chatbot</a></strong> – Provides instant responses to your queries.
          </li>
          <li className="mb-3" data-aos="fade-up">
            <FaPenFancy className="text-success me-2" /> <strong><a href="#content-generator-guide">AI Content Generator</a></strong> – Assists in writing blogs, social media posts, and articles.
          </li>
          <li className="mb-3" data-aos="fade-up">
            <FaImage className="text-danger me-2" /> <strong><a href="#image-recognition-guide">AI Image Recognition</a></strong> – Analyzes uploaded images.
          </li>
          <li className="mb-3" data-aos="fade-up">
            <FaMicrophone className="text-warning me-2" /> <strong><a href="#voice-to-text-guide">Voice-to-Text</a></strong> – Converts voice input into text.
          </li>
          <li className="mb-3" data-aos="fade-up">
            <FaChartBar className="text-info me-2" /> <strong><a href="#data-analysis-guide">AI Data Analysis</a></strong> – Extracts insights from your data.
          </li>
        </ul>
        <p className="text-center mt-3" data-aos="zoom-in">
          <FaArrowRight className="text-warning me-2" /> <strong>Click on each feature to learn more!</strong>
        </p>
      </Card>
    </Container>
  );
};

export default Support;
