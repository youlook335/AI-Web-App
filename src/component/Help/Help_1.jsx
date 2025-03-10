import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Envelope, ChatDots, Telephone, Clock, Bell, Newspaper, Twitter, Discord } from "react-bootstrap-icons";
import "../../Styles/Help1.css";

const Help_1 = () => {
  return (
    <Container className="Help_1-container">
      <h2 className="section-title"> Contact Us</h2>
      <Row className="Help_1-info">
        <Col md={4} className="Help_1-item">
          <Envelope size={24} className="icon" />
          <strong>Email:</strong> <a className="text-decoration-none" href="mailto:support@aiwebapp.com">support@aiwebapp.com</a>
        </Col>
        <Col md={4} className="Help_1-item">
          <ChatDots size={24} className="icon" />
          <strong>Live Chat:</strong> <a className="text-decoration-none" href="#live-chat">Chat Now</a>
        </Col>
        <Col md={4} className="Help_1-item">
          <Telephone size={24} className="icon" />
          <strong>Phone:</strong> <a className="text-decoration-none" href="tel:+18001234567">+1 800 123 4567</a>
        </Col>
      </Row>
      
      <h3 className="section-title">Support Hours:</h3>
      <p><Clock size={20} className="icon" /> <strong>Monday - Friday:</strong> 9 AM - 6 PM (GMT)</p>
      <p><Clock size={20} className="icon" /> <strong>Saturday - Sunday:</strong> Limited Support</p>
      
      <Button variant="primary" href="#support-ticket">Submit a Support Ticket</Button>
      
      <hr />
      
      <h2 className="section-title">Latest Updates & Community</h2>
      <p><Bell size={24} className="icon" /> <strong>Stay Updated!</strong></p>
      <div className="button-group">
      <Button variant="info" href="#subscribe-newsletter" className="action-btn">
        <Newspaper size={20} className="icon" /> Join Our Newsletter
      </Button>
      <Button variant="dark" href="#follow-twitter" className="action-btn ml-2">
        <Twitter size={20} className="icon" /> Follow Us on Twitter
      </Button>
      <Button variant="secondary" href="#join-discord" className="action-btn ml-2">
        <Discord size={20} className="icon" /> Join Our Community on Discord
      </Button>
      </div>
    </Container>
  );
};

export default Help_1;