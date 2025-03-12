import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt, FaUserShield, FaLock, FaExclamationTriangle, FaRobot, FaUserCheck, FaBell, FaBolt, FaRocket } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";

const SecurityFraudPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container className="py-5 text-center">
      <h1 className="mb-4 text-primary d-flex align-items-center justify-content-center" data-aos="fade-down">
        <FaShieldAlt className="me-2" /> Security & Fraud Detection – Protect Your Digital Assets
      </h1>
      <p className="lead text-muted" data-aos="fade-up">
        Our AI monitors, detects, and prevents cybersecurity threats before they become serious.
      </p>

      <Row className="mt-5">
        <Col md={6} className="mb-4" data-aos="fade-right">
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body>
              <h3 className="text-primary d-flex align-items-center">
                <FaUserShield className="me-2" /> For Individuals & Freelancers
              </h3>
              <ul className="list-unstyled mt-3 text-muted">
                <li><FaLock className="text-success me-2" /> Get AI-powered spam detection and filtering</li>
                <li><FaExclamationTriangle className="text-danger me-2" /> Monitor for suspicious account activity</li>
                <li><FaRobot className="text-info me-2" /> Secure personal data with AI-generated strong passwords</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4" data-aos="fade-left">
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body>
              <h3 className="text-primary d-flex align-items-center">
                <FaUserCheck className="me-2" /> For Businesses & Enterprises
              </h3>
              <ul className="list-unstyled mt-3 text-muted">
                <li><FaLock className="text-success me-2" /> Identify fraudulent transactions and threats</li>
                <li><FaBell className="text-warning me-2" /> Automate cybersecurity monitoring and risk analysis</li>
                <li><FaBolt className="text-danger me-2" /> Receive real-time alerts for suspicious activity</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-lg border-0 rounded-4 mt-4 bg-light p-4" data-aos="zoom-in">
        <Card.Body>
          <h3 className="text-dark d-flex align-items-center justify-content-center">
            <FaRocket className="me-2" /> Who Can Benefit from Our AI?
          </h3>
          <Row className="mt-3 text-muted">
            <Col md={6} data-aos="fade-up">
              <ul className="list-unstyled">
                <li><FaUserShield className="text-primary me-2" /> Individuals & Students – Get instant help with writing, learning, and organizing tasks.</li>
                <li><FaUserCheck className="text-success me-2" /> Freelancers & Creators – Automate content creation, editing, and visual design.</li>
              </ul>
            </Col>
            <Col md={6} data-aos="fade-up">
              <ul className="list-unstyled">
                <li><FaRocket className="text-danger me-2" /> Small Businesses & Startups – Boost productivity and automate marketing & customer service.</li>
                <li><FaShieldAlt className="text-warning me-2" /> Enterprises & Corporations – Utilize AI for business intelligence, cybersecurity, and automation.</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SecurityFraudPage;
