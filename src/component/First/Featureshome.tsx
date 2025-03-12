import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaComments, FaLanguage, FaChartLine, FaMicrophone, FaCloud, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

const Featureshome: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // اینیمیشن کا دورانیہ
            once: true, // اینیمیشن صرف ایک بار چلے
        });
    }, []);

    return (
        <section className="features py-5 bg-light">
            <div className="container">
                {/* Header Section */}
                <div className="row mb-4" data-aos="fade-up">
                    <div className="col-md-12 text-center">
                        <h2 className="display-4 fw-bold text-primary">AI Web App Features</h2>
                        <p className="lead">Explore the advanced functionalities of our AI-powered web application.</p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="row">
                    <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
                        <a href="/chatbot" className="text-decoration-none text-dark">
                            <FaComments size={50} className="text-info mb-3" />
                            <h3>Chatbot Integration</h3>
                            <p>Seamless AI-powered chatbot for real-time customer interactions.</p>
                        </a>
                    </div>
                    
                    <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
                        <a href="/translation" className="text-decoration-none text-dark">
                            <FaLanguage size={50} className="text-success mb-3" />
                            <h3>Language Translation</h3>
                            <p>Instant multi-language translation for global users.</p>
                        </a>
                    </div>
                    
                    <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
                        <a href="/sentiment-analysis" className="text-decoration-none text-dark">
                            <FaChartLine size={50} className="text-warning mb-3" />
                            <h3>Sentiment Analysis</h3>
                            <p>Analyze user sentiments to improve service quality.</p>
                        </a>
                    </div>
                    
                    <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
                        <a href="/speech-recognition" className="text-decoration-none text-dark">
                            <FaMicrophone size={50} className="text-danger mb-3" />
                            <h3>Speech Recognition</h3>
                            <p>Convert speech into text for better accessibility.</p>
                        </a>
                    </div>
                    
                    <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
                        <a href="/cloud-integration" className="text-decoration-none text-dark">
                            <FaCloud size={50} className="text-primary mb-3" />
                            <h3>Cloud Integration</h3>
                            <p>Secure cloud storage for user data and interactions.</p>
                        </a>
                    </div>
                    
                    <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
                        <Link to="/privacy" className="text-decoration-none text-dark">
                            <FaUserShield size={50} className="text-secondary mb-3" />
                            <h3>Data Privacy</h3>
                            <p>End-to-end encryption to protect user information.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featureshome;
