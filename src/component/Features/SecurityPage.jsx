import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLock, FaShieldAlt, FaBell, FaUsers, FaRocket, FaCheckCircle } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SecurityPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // اینیمیشن صرف ایک بار چلے
    });
  }, []);

  return (
    <Container className="py-5">
      {/* Header Section */}
      <div className="text-center mb-5" data-aos="fade-up">
        <FaShieldAlt size={50} className="text-primary" />
        <h2 className="fw-bold mt-3"> Security & Fraud Detection</h2>
        <p className="text-muted">Protect Your Digital Assets with AI-Powered Security</p>
      </div>

      {/* Individual & Freelancers Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-lg border-0" data-aos="fade-right">
            <Card.Body className="text-center">
              <FaUsers size={40} className="text-success mb-3" />
              <h4 className="fw-bold">For Individuals & Freelancers</h4>
              <ul className="list-unstyled mt-3">
                <li><FaCheckCircle className="text-success me-2" /> AI-powered spam detection</li>
                <li><FaCheckCircle className="text-success me-2" /> Monitor suspicious activity</li>
                <li><FaCheckCircle className="text-success me-2" /> AI-generated strong passwords</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Businesses & Enterprises Section */}
        <Col md={6}>
          <Card className="shadow-lg border-0" data-aos="fade-left">
            <Card.Body className="text-center">
              <FaLock size={40} className="text-danger mb-3" />
              <h4 className="fw-bold">For Businesses & Enterprises</h4>
              <ul className="list-unstyled mt-3">
                <li><FaCheckCircle className="text-danger me-2" /> Identify fraudulent transactions</li>
                <li><FaCheckCircle className="text-danger me-2" /> Automate cybersecurity monitoring</li>
                <li><FaCheckCircle className="text-danger me-2" /> Real-time threat alerts</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* AI Learning Section */}
      <Card className="shadow-lg border-0 text-center mb-4" data-aos="zoom-in">
        <Card.Body>
          <FaBell size={40} className="text-warning mb-3" />
          <h4 className="fw-bold">Bonus: AI Continuously Learns</h4>
          <p className="text-muted">Our AI evolves with new threats, making security stronger over time.</p>
        </Card.Body>
      </Card>

      {/* Who Can Benefit Section */}
      <Row>
        <Col md={12} className="text-center mb-4" data-aos="fade-up">
          <h3 className="fw-bold"> Who Can Benefit from Our AI?</h3>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 text-center" data-aos="zoom-in">
            <Card.Body>
              <FaUsers size={35} className="text-info mb-2" />
              <h5>Individuals & Students</h5>
              <p className="text-muted">Get AI-powered assistance for learning & writing tasks.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 text-center" data-aos="zoom-in">
            <Card.Body>
              <FaRocket size={35} className="text-primary mb-2" />
              <h5>Freelancers & Creators</h5>
              <p className="text-muted">Automate content creation and editing effortlessly.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 text-center" data-aos="zoom-in">
            <Card.Body>
              <FaLock size={35} className="text-danger mb-2" />
              <h5>Businesses & Startups</h5>
              <p className="text-muted">Enhance security and automate customer service.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 text-center" data-aos="zoom-in">
            <Card.Body>
              <FaShieldAlt size={35} className="text-success mb-2" />
              <h5>Enterprises & Corporations</h5>
              <p className="text-muted">Utilize AI for fraud detection and automation.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <div className="text-center mt-5" data-aos="zoom-in">
        <h3 className="fw-bold">Get Started Today!</h3>
        <p className="text-muted">Experience the future of AI-powered innovation.</p>
        <Button variant="primary" size="lg" data-aos="bounce">Try it Now</Button>
      </div>
    </Container>
  );
};

export default SecurityPage;
