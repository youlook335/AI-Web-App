import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col, Card } from "react-bootstrap";
import { FaCogs, FaSearch } from "react-icons/fa";
import { FaChartLine, FaCode, FaDatabase, FaRobot } from "react-icons/fa6";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaRobot className="text-primary" size={40} />,
    title: "AI-Powered Chatbot Assistance",
    description: "Instant intelligent responses with NLP.",
  },
  {
    icon: <FaChartLine className="text-success" size={40} />,
    title: "AI for Business & Industry",
    description: "AI-driven analytics, sales forecasting, and automation.",
  },
  {
    icon: <FaCode className="text-danger" size={40} />,
    title: "AI for Developers",
    description: "Code optimization, debugging, and AI-powered APIs.",
  },
  {
    icon: <FaDatabase className="text-warning" size={40} />,
    title: "AI & Data Science",
    description: "Big Data processing, machine learning, and pattern recognition.",
  },
  {
    icon: <FaSearch className="text-info" size={40} />,
    title: "AI-Driven SEO Optimization",
    description: "AI-based keyword research and content suggestions.",
  },
  {
    icon: <FaCogs className="text-dark" size={40} />,
    title: "AI in Automation",
    description: "AI-driven workflow optimization and productivity tools.",
  },
];

const Ourabout: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Section Heading */}
      <Row className="mt-4">
        <Col>
          <h2 className="text-center fw-bold mt-3 text-primary" data-aos="fade-up">
            What We Offer
          </h2>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="mt-4">
        {features.map((item, index) => (
          <Col md={4} key={index} className="mb-4" data-aos="zoom-in">
            <Card className="shadow-lg border-0 text-center p-4">
              <Card.Body>
                <div className="mb-3">{item.icon}</div>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Ourabout;
