import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button } from "react-bootstrap";

const AIFeatures1: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // صرف ایک بار اینیمیشن چلے گی
    });
  }, []);

  return (
    <Container className="mt-5 text-center bg-light p-5 rounded-3" data-aos="fade-up">
      <h1 className="fw-bold text-dark mb-4" data-aos="zoom-in"> Welcome to the AI Revolution!</h1>
      <h3 className="text-secondary" data-aos="fade-right">Wait… Did You Just Step Into the Future?</h3>
      <p className="text-muted" data-aos="fade-left">
        Yes, you did. And guess what? AI is no longer science fiction—it’s here, and it’s ready to work for YOU.
      </p>
      <p className="text-muted" data-aos="fade-up">
        Imagine an assistant that never sleeps, never gets tired, and knows exactly what you need before you even ask. 
        Sounds crazy, right? Well, welcome to our AI web app.
      </p>
      <Button variant="primary" size="lg" className="mb-4" data-aos="zoom-in">Get Started</Button>
    </Container>
  );
};

export default AIFeatures1;
