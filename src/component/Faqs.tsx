import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
    FaPlus,
    FaMinus,
    FaRobot,
    FaBrain,
    FaLightbulb,
    FaCogs,
    FaShieldAlt,
    FaUserCog,
    FaChartLine,
} from "react-icons/fa";

interface Faq {
    question: string;
    answer: string;
    icon: JSX.Element;
}

const Faqs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const toggleAnswer = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: Faq[] = [
        {
            question: "What is AI?",
            answer: "AI (Artificial Intelligence) is a technology that enables computers to solve problems and make decisions similar to human intelligence.",
            icon: <FaRobot className="text-primary" />,
        },
        {
            question: "How does AI learn?",
            answer: "AI learns through data processing, pattern recognition, and machine learning algorithms that improve over time with experience.",
            icon: <FaBrain className="text-success" />,
        },
        {
            question: "Can AI think like a human?",
            answer: "AI can simulate human-like decision-making but lacks true consciousness, emotions, and self-awareness.",
            icon: <FaLightbulb className="text-warning" />,
        },
        {
            question: "How do our AI services help businesses?",
            answer: "Our AI solutions streamline operations, enhance customer experience, and provide data-driven insights for better decision-making.",
            icon: <FaCogs className="text-danger" />,
        },
        {
            question: "What are the risks of AI?",
            answer: "AI risks include ethical concerns, data privacy issues, and potential biases in AI decision-making.",
            icon: <FaShieldAlt className="text-dark" />,
        },
    ];

    return (
        <div className="bg-light">
            <Container className="py-5 bg-light">
                {/* Features Section */}
                <h2 className="text-center mb-4 fw-bold text-dark" data-aos="zoom-in">
                    AI-Powered Features
                </h2>
                <Row className="mb-4 text-center">
                    <Col md={4} data-aos="fade-right">
                        <Card className="shadow-sm p-3">
                            <Card.Body>
                                <FaRobot size={40} className="mb-2 text-primary" />
                                <Card.Title>Smart Chatbot</Card.Title>
                                <Card.Text>Our AI chatbot understands natural language and responds intelligently.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-up">
                        <Card className="shadow-sm p-3">
                            <Card.Body>
                                <FaUserCog size={40} className="mb-2 text-success" />
                                <Card.Title>Personalized Recommendations</Card.Title>
                                <Card.Text>We use machine learning to provide tailored suggestions for users.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-left">
                        <Card className="shadow-sm p-3">
                            <Card.Body>
                                <FaChartLine size={40} className="mb-2 text-danger" />
                                <Card.Title>Continuous Learning</Card.Title>
                                <Card.Text>Our AI improves over time through user interactions.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* FAQ Section */}
                <h2 className="text-center mb-4 fw-bold text-primary" data-aos="zoom-in">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-muted" data-aos="fade-up">Find answers to common questions about AI and our services</p>
                <Row>
                    <Col md={12}>
                        {faqs.map((faq, index) => (
                            <Card key={index} className="mb-4 border-0 shadow-lg rounded-3" data-aos="fade-up">
                                <Card.Header
                                    className="d-flex justify-content-between align-items-center bg-white p-4"
                                    onClick={() => toggleAnswer(index)}
                                    style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold", color: "#343a40" }}
                                >
                                    {faq.icon} {faq.question}
                                    {openIndex === index ? <FaMinus className="text-primary" /> : <FaPlus className="text-primary" />}
                                </Card.Header>
                                {openIndex === index && (
                                    <Card.Body className="bg-light p-4" style={{ fontSize: "16px", color: "#495057" }}>
                                        {faq.answer}
                                    </Card.Body>
                                )}
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faqs;
