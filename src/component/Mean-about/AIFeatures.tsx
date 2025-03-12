import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRobot, FaSyncAlt, FaSearch, FaBrain, FaBolt } from "react-icons/fa";

const AIFeatures: React.FC = () => {
  const features = [
    {
      icon: <FaRobot size={60} className="mx-auto text-primary mb-3" />,
      title: "Talk to AI, Like a Friend",
      description: "Get instant, smart, and natural responses for all your queries, just like talking to a human.",
    },
    {
      icon: <FaSyncAlt size={60} className="mx-auto text-success mb-3" />,
      title: "Automate the Boring Stuff",
      description: "Let AI handle repetitive tasks, manage schedules, and optimize workflow effortlessly.",
    },
    {
      icon: <FaSearch size={60} className="mx-auto text-danger mb-3" />,
      title: "SEO Made Easy",
      description: "AI-driven insights to improve your website’s ranking, optimize content, and drive traffic.",
    },
    {
      icon: <FaBrain size={60} className="mx-auto text-warning mb-3" />,
      title: "AI That Learns & Adapts",
      description: "Smarter suggestions based on user behavior, continuously improving with usage.",
    },
    {
      icon: <FaBolt size={60} className="mx-auto text-info mb-3" />,
      title: "Power for Businesses",
      description: "AI-powered analytics, customer engagement, and trend prediction to boost business growth.",
    },
  ];

  return (
    <Container className="mt-5 text-center">
      <h2 className="text-center mb-5 fw-bold text-primary">What Can Our AI Do for You?</h2>
      <Row className="g-4 justify-content-center">
        {features.map((feature, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="text-center p-4 shadow-lg border-0 rounded-3">
              {feature.icon}
              <Card.Body>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AIFeatures;
