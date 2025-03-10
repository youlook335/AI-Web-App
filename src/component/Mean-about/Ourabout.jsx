import React from 'react'
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { FaCogs, FaSearch } from 'react-icons/fa';
import { FaChartLine, FaCode, FaDatabase, FaRobot } from 'react-icons/fa6';


const Ourabout = () => {
  return (
    <>
       <Row className="mt-4">
                <Col>
                    <h2 className="section-heading mt-3">What We Offer</h2>
                </Col>
            </Row>
            <Row>
                {[
                    {
                        icon: <FaRobot />,
                        title: "AI-Powered Chatbot Assistance",
                        description: "Instant intelligent responses with NLP.",
                    },
                    {
                        icon: <FaChartLine />,
                        title: "AI for Business & Industry",
                        description: "AI-driven analytics, sales forecasting, and automation.",
                    },
                    {
                        icon: <FaCode />,
                        title: "AI for Developers",
                        description: "Code optimization, debugging, and AI-powered APIs.",
                    },
                    {
                        icon: <FaDatabase />,
                        title: "AI & Data Science",
                        description: "Big Data processing, machine learning, and pattern recognition.",
                    },
                    {
                        icon: <FaSearch />,
                        title: "AI-Driven SEO Optimization",
                        description: "AI-based keyword research and content suggestions.",
                    },
                    {
                        icon: <FaCogs />,
                        title: "AI in Automation",
                        description: "AI-driven workflow optimization and productivity tools.",
                    },
                ].map((item, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="shadow-sm feature-card">
                            <Card.Body>
                                <div className="feature-icon">{item.icon}</div>
                                <Card.Title className="feature-title">{item.title}</Card.Title>
                                <Card.Text className="feature-text">{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    </>
  )
}

export default Ourabout
