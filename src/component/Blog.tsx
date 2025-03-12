import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaBookOpen, FaLightbulb, FaRobot, FaDatabase, FaCogs, FaMicrochip, FaGlobe, FaUsers } from "react-icons/fa";
import Chatbot from "./Mean-about/Chatbot1";
import SEOContentPage from "./SEOContentPage";

const Blog: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // صرف ایک بار اینیمیشن چلے گی
    });
  }, []);

  return (
    <>
      <div className="bg-light">
        <Container className="py-5 bg-light">
          <h1 className="text-center mb-4 fw-bold" data-aos="fade-up">
            AI Blog: Welcome to the World of Artificial Intelligence
          </h1>
          <p className="text-muted text-center fs-5" data-aos="fade-up">
            Stay updated with the latest trends, tips, and resources to enhance your knowledge in AI and technology.
          </p>

          <Row className="mb-4">
            <Col md={6} data-aos="fade-right">
              <Card className="shadow-sm p-3 border-0">
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1400/1*-Ys9CFCuwMUusQiUhVZabA.png"
                  fluid
                  className="mb-3"
                  alt="What is AI?"
                />
                <Card.Body>
                  <Card.Title>
                    <FaRobot className="text-primary me-2" /> What is AI?
                  </Card.Title>
                  <Card.Text>
                    AI enables machines to think, learn, and solve problems like humans using machine learning and deep learning technologies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} data-aos="fade-left">
              <Card className="shadow-sm p-3 border-0">
                <Image
                  style={{ height: "300px" }}
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20240603170135/Fundamental-concept-of-Ai.png"
                  fluid
                  className="mb-3"
                  alt="How Does AI Work?"
                />
                <Card.Body>
                  <Card.Title>
                    <FaLightbulb className="text-warning me-2" /> How Does AI Work?
                  </Card.Title>
                  <Card.Text>
                    AI processes vast amounts of data to recognize patterns and make intelligent decisions, improving over time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Chatbot />

          <h3 className="text-center my-4 fw-bold" data-aos="zoom-in">Latest AI Innovations</h3>
          <Row>
            <Col md={4} data-aos="fade-up">
              <Card className="shadow-sm p-3 border-0">
                <Card.Body>
                  <Card.Title>
                    <FaMicrochip className="text-success me-2" /> AI in Healthcare
                  </Card.Title>
                  <Card.Text>
                    AI is transforming healthcare with predictive diagnostics, robotic surgeries, and personalized treatments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="shadow-sm p-3 border-0">
                <Card.Body>
                  <Card.Title>
                    <FaGlobe className="text-info me-2" /> AI in Business
                  </Card.Title>
                  <Card.Text>
                    From automation to data analysis, AI is revolutionizing the business world by improving efficiency and decision-making.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="400">
              <Card className="shadow-sm p-3 border-0">
                <Card.Body>
                  <Card.Title>
                    <FaUsers className="text-danger me-2" /> AI & Society
                  </Card.Title>
                  <Card.Text>
                    Explore how AI is shaping our social structures, ethics, and daily interactions in the modern world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h3 className="text-center my-4 fw-bold" data-aos="zoom-in">Useful AI Resources</h3>
          <Row>
            <Col md={4} data-aos="flip-left">
              <Card className="shadow-sm p-3 border-0">
                <Card.Body>
                  <Card.Title>
                    <FaCogs className="text-info me-2" /> AI Development Tools
                  </Card.Title>
                  <Card.Text>
                    Access powerful AI tools like TensorFlow, PyTorch, and OpenAI API for building intelligent applications.
                  </Card.Text>
                  <Button variant="outline-info" href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="flip-left" data-aos-delay="200">
              <Card className="shadow-sm p-3 border-0">
                <Card.Body>
                  <Card.Title>
                    <FaDatabase className="text-success me-2" /> Machine Learning Tutorials
                  </Card.Title>
                  <Card.Text>
                    Learn the fundamentals of machine learning and data science from top platforms like Coursera and Udemy.
                  </Card.Text>
                  <Button variant="outline-success" href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="flip-left" data-aos-delay="400">
              <Card className="shadow-sm p-3 border-0">
                <Card.Body>
                  <Card.Title>
                    <FaBookOpen className="text-danger me-2" /> AI Research Papers
                  </Card.Title>
                  <Card.Text>
                    Stay ahead with cutting-edge AI research from arXiv and Google AI publications.
                  </Card.Text>
                  <Button variant="outline-danger" href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <SEOContentPage />

          <h3 className="text-center my-4 fw-bold" data-aos="fade-up">Conclusion</h3>
          <Row>
            <Col>
              <p className="text-muted text-center fs-5" data-aos="fade-up">
                AI is revolutionizing the world! Businesses, marketers, and developers can leverage AI for efficiency and growth. Don't miss out on AI-driven opportunities.
              </p>
              <div className="text-center mt-3" data-aos="zoom-in">
                <Button variant="primary" size="lg">🚀 Explore AI Solutions</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blog;
