import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaGlobe, FaBullseye, FaRobot, FaLightbulb } from "react-icons/fa";
import "../../Styles/Hero.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // صرف ایک بار اینیمیشن چلے گی
    });
  }, []);

  return (
    <>
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold heading" data-aos="fade-down">
            Our AI Web App
          </h1>
          <p className="text-muted subheading" data-aos="fade-up">
            Welcome to the Future of AI!
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="info-box" data-aos="fade-right">
          <div className="icon-container">
            <FaGlobe className="icon-large" />
          </div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to make AI accessible, ethical, and impactful for businesses worldwide.
            We believe in leveraging artificial intelligence to solve complex problems, drive innovation,
            and enhance decision-making capabilities for enterprises of all sizes.
          </p>
        </Col>
        <Col md={6} className="info-box" data-aos="fade-left">
          <div className="icon-container">
            <FaBullseye className="icon-large" />
          </div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge the gap between AI and real-world applications with efficiency and transparency.
            We aim to create cutting-edge AI solutions that are user-friendly, scalable, and tailored to meet
            the evolving needs of businesses, ensuring sustainable growth and success.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="info-box" data-aos="zoom-in">
          <div className="icon-container">
            <FaLightbulb className="icon-large" />
          </div>
          <h2>Innovation & AI</h2>
          <p>
            We continuously strive to push the boundaries of artificial intelligence, integrating advanced
            machine learning and deep learning techniques to create smarter, more intuitive AI-driven solutions.
          </p>
        </Col>
        <Col md={6} className="info-box" data-aos="zoom-in">
          <div className="icon-container">
            <FaRobot className="icon-large" />
          </div>
          <h2>Future of AI</h2>
          <p>
            AI is transforming industries, and we are at the forefront of this revolution.
            Our focus is on developing AI tools that enhance automation, improve decision-making, and
            drive business success in the ever-evolving digital landscape.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
