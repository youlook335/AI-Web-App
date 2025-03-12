import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { 
  Envelope, ChatDots, Telephone, Clock, Bell, Newspaper, 
  Twitter, Discord 
} from "react-bootstrap-icons";
import "../../Styles/Help1.css";

const Help_1: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // صرف ایک بار اینیمیشن چلے گی
    });
  }, []);

  return (
    <Container className="Help_1-container" data-aos="fade-up">
      <h2 className="section-title text-center text-primary" data-aos="zoom-in">Contact Us</h2>
      <Row className="Help_1-info">
        <Col md={4} className="Help_1-item" data-aos="fade-right">
          <Envelope size={24} className="icon text-info" />
          <strong>Email:</strong> <a className="text-decoration-none" href="mailto:support@aiwebapp.com">support@aiwebapp.com</a>
        </Col>
        <Col md={4} className="Help_1-item" data-aos="fade-up">
          <ChatDots size={24} className="icon text-success" />
          <strong>Live Chat:</strong> <a className="text-decoration-none" href="#live-chat">Chat Now</a>
        </Col>
        <Col md={4} className="Help_1-item" data-aos="fade-left">
          <Telephone size={24} className="icon text-danger" />
          <strong>Phone:</strong> <a className="text-decoration-none" href="tel:+18001234567">+1 800 123 4567</a>
        </Col>
      </Row>
      
      <h3 className="section-title mt-4" data-aos="zoom-in">Support Hours:</h3>
      <p data-aos="fade-up"><Clock size={20} className="icon text-warning" /> <strong>Monday - Friday:</strong> 9 AM - 6 PM (GMT)</p>
      <p data-aos="fade-up"><Clock size={20} className="icon text-warning" /> <strong>Saturday - Sunday:</strong> Limited Support</p>
      
      <div className="text-center mt-3" data-aos="zoom-in">
        <Button variant="primary" href="#support-ticket" className="rounded-pill px-4 py-2">
          Submit a Support Ticket
        </Button>
      </div>

      <hr data-aos="fade-up" />
      
      <h2 className="section-title text-center text-primary" data-aos="zoom-in">Latest Updates & Community</h2>
      <p className="text-center" data-aos="fade-up">
        <Bell size={24} className="icon text-secondary" /> <strong>Stay Updated!</strong>
      </p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button variant="info" href="#subscribe-newsletter" className="action-btn" data-aos="fade-right">
          <Newspaper size={20} className="icon" /> Join Our Newsletter
        </Button>
        <Button variant="dark" href="#follow-twitter" className="action-btn" data-aos="fade-up">
          <Twitter size={20} className="icon" /> Follow Us on Twitter
        </Button>
        <Button variant="secondary" href="#join-discord" className="action-btn" data-aos="fade-left">
          <Discord size={20} className="icon" /> Join Our Community on Discord
        </Button>
      </div>
    </Container>
  );
};

export default Help_1;
