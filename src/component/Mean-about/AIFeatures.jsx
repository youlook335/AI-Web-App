import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRobot, FaSyncAlt, FaSearch, FaBrain, FaBolt } from "react-icons/fa";

const AIFeatures = () => {
  return (
    <Container className="mt-5 text-center">
      <h2 className="text-center mb-5 fw-bold text-primary">What Can Our AI Do for You?</h2>
      <Row className="g-4 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="text-center p-4 shadow-lg border-0 rounded-3">
            <FaRobot size={60} className="mx-auto text-primary mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold">Talk to AI, Like a Friend</Card.Title>
              <Card.Text>Get instant, smart, and natural responses for all your queries, just like talking to a human.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center p-4 shadow-lg border-0 rounded-3">
            <FaSyncAlt size={60} className="mx-auto text-success mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold">Automate the Boring Stuff</Card.Title>
              <Card.Text>Let AI handle repetitive tasks, manage schedules, and optimize workflow effortlessly.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center p-4 shadow-lg border-0 rounded-3">
            <FaSearch size={60} className="mx-auto text-danger mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold">SEO Made Easy</Card.Title>
              <Card.Text>AI-driven insights to improve your website’s ranking, optimize content, and drive traffic.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center p-4 shadow-lg border-0 rounded-3">
            <FaBrain size={60} className="mx-auto text-warning mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold">AI That Learns & Adapts</Card.Title>
              <Card.Text>Smarter suggestions based on user behavior, continuously improving with usage.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center p-4 shadow-lg border-0 rounded-3">
            <FaBolt size={60} className="mx-auto text-info mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold">Power for Businesses</Card.Title>
              <Card.Text>AI-powered analytics, customer engagement, and trend prediction to boost business growth.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AIFeatures;
