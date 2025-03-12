import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaChartLine, FaRobot, FaCog, FaRocket } from "react-icons/fa";

const AIContentPage: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="container mt-5">
            <div className="text-center" data-aos="zoom-in">
                <h1 className="fw-bold text-primary">AI-Powered Content Optimization – Boost Your Search Rankings</h1>
                <p className="lead mt-3 text-secondary" data-aos="fade-up">
                    Struggling to rank higher on Google? Our AI-driven content optimization tool generates high-quality,
                    search-engine-friendly content that not only improves your rankings but also enhances user
                    engagement.
                </p>
            </div>

            <div className="card shadow-lg p-4 mt-4 border-0 rounded-4" data-aos="fade-right">
                <h3 className="text-primary mb-3" data-aos="zoom-in"> AI-Powered Features:</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaRobot className="text-success me-2" /> <strong>AI-Generated Content</strong> – Unique,
                        engaging, and SEO-optimized text
                    </li>
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaCog className="text-success me-2" /> <strong>Smart Keyword Research</strong> – AI-driven
                        keyword analysis for better targeting
                    </li>
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaCheckCircle className="text-success me-2" /> <strong>On-Page Optimization</strong> – AI-enhanced meta descriptions, headings, and URLs
                    </li>
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaCheckCircle className="text-success me-2" /> <strong>Readability & Engagement</strong> – AI refines content for clarity and user retention
                    </li>
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaCheckCircle className="text-success me-2" /> <strong>Plagiarism-Free</strong> – Ensures 100%
                        unique and original content
                    </li>
                </ul>
            </div>

            <div className="card shadow-lg p-4 mt-4 bg-light border-0 rounded-4" data-aos="fade-left">
                <h3 className="text-success mb-3" data-aos="zoom-in"> Benefits of AI-Optimized Content:</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaChartLine className="text-primary me-2" /> Increased website traffic and higher search rankings
                    </li>
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaCheckCircle className="text-primary me-2" /> AI-optimized content tailored for search engines
                        and readers
                    </li>
                    <li className="list-group-item border-0" data-aos="fade-up">
                        <FaCheckCircle className="text-primary me-2" /> Establishes brand authority with high-quality content
                    </li>
                </ul>
            </div>

            <div className="text-center mt-5 mb-5" data-aos="zoom-in">
                <h4 className="text-danger fw-bold">
                    Leverage AI to rank on Google’s first page! <FaRocket className="text-warning" />
                </h4>
            </div>
        </div>
    );
};

export default AIContentPage;