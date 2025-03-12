import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { 
  FaCreditCard, FaPaypal, FaShieldAlt, FaUndo, FaLock, FaTools, FaUserShield, 
  FaCheckCircle, FaKey, FaQuestionCircle, FaSyncAlt, FaShoppingCart, 
  FaExclamationTriangle, FaEnvelope 
} from "react-icons/fa";
import "../../Styles/Subscription.css";

const Subscription: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // صرف ایک بار اینیمیشن چلے گی
    });
  }, []);

  return (
    <Container className="subscription-container" data-aos="fade-up">
      <h2 className="text-center section-title text-primary" data-aos="zoom-in">
        <FaShoppingCart className="icon" /> Subscription & Payment
      </h2>

      <Card className="modern-card" data-aos="fade-right">
        <Card.Body>
          <h3><FaQuestionCircle className="icon" /> How to Purchase a Plan?</h3>
          <ListGroup>
            <ListGroup.Item className="plan-item">
              <FaCheckCircle className="icon text-success" /> <strong>Basic Plan:</strong> Free (Limited Features)
            </ListGroup.Item>
            <Button variant="outline-primary" className="full-width-button">Subscribe Now</Button>

            <ListGroup.Item className="plan-item">
              <FaCheckCircle className="icon text-success" /> <strong>Pro Plan:</strong> $19.99/Month (All Features)
            </ListGroup.Item>
            <Button variant="outline-success" className="full-width-button">Upgrade to Pro</Button>

            <ListGroup.Item className="plan-item">
              <FaCheckCircle className="icon text-success" /> <strong>Enterprise Plan:</strong> Custom Pricing (For Businesses)
            </ListGroup.Item>
            <Button variant="outline-warning" className="full-width-button">Contact Sales</Button>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="modern-card" data-aos="fade-left">
        <Card.Body>
          <h4><FaCreditCard className="icon" /> Accepted Payment Methods:</h4>
          <p><FaCreditCard className="icon text-primary" /> Credit/Debit Card</p>
          <p><FaPaypal className="icon text-info" /> PayPal</p>
          <p><FaCreditCard className="icon text-success" /> Stripe</p>
        </Card.Body>
      </Card>

      <Card className="modern-card" data-aos="fade-up">
        <Card.Body>
          <h4><FaUndo className="icon" /> Refund Policy:</h4>
          <p>If you're not satisfied, get a <strong>7 Days Money Back Guarantee</strong></p>
          <Button variant="outline-danger" className="full-width-button">
            <FaSyncAlt className="icon" /> Refund Policy
          </Button>
        </Card.Body>
      </Card>

      <h2 className="text-center section-title text-primary" data-aos="zoom-in">
        <FaUserShield className="icon" /> Security & Privacy
      </h2>
      <Card className="modern-card" data-aos="fade-right">
        <Card.Body>
          <h3><FaLock className="icon" /> Is My Data Safe?</h3>
          <p>
            <FaShieldAlt className="icon text-warning" /> End-to-End Encryption & 
            <strong> Two-Factor Authentication (2FA)</strong>.
          </p>
          <Button variant="outline-info" className="full-width-button">
            <FaKey className="icon" /> Read Our Privacy Policy
          </Button>
          <Button variant="outline-info" className="full-width-button">GDPR Compliance</Button>
        </Card.Body>
      </Card>

      <h2 className="text-center section-title text-primary" data-aos="zoom-in">
        <FaTools className="icon" /> Troubleshooting & Support
      </h2>
      <Card className="modern-card" data-aos="fade-left">
        <Card.Body>
          <h3><FaQuestionCircle className="icon" /> Common Issues & Solutions</h3>
          
          <h5><FaKey className="icon" /> I Forgot My Password. What Should I Do?</h5>
          <p>Reset your password below:</p>
          <Button variant="warning" className="full-width-button">
            <FaSyncAlt className="icon" /> Reset Password
          </Button>
          
          <h5 className="mt-3">
            <FaExclamationTriangle className="icon text-danger" /> AI Is Not Responding Properly.
          </h5>
          <p>
            <FaCheckCircle className="icon text-success" /> Check your <strong>Internet Connection</strong>.<br />
            <FaCheckCircle className="icon text-success" /> Clear <strong>Cookies & Cache</strong>.<br />
            <FaCheckCircle className="icon text-success" /> If the issue persists, contact support.
          </p>
          <Button variant="primary" className="full-width-button">
            <FaEnvelope className="icon" /> Contact Support
          </Button>
          
          <h5 className="mt-3"><FaCreditCard className="icon" /> My Payment Failed.</h5>
          <p>
            <FaCheckCircle className="icon text-success" /> Ensure your <strong>Card is Valid</strong> and that your bank allows transactions.
          </p>
          <Button variant="danger" className="full-width-button">
            <FaEnvelope className="icon" /> Email Support
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Subscription;
