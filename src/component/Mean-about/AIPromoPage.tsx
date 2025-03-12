import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button } from "react-bootstrap";
import { FaRocket } from "react-icons/fa";

const AIPromoPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کا دورانیہ
      once: true, // صرف ایک بار اینیمیشن چلے گی
    });
  }, []);

  return (
    <div className="bg-light align-items-center justify-content-center text-center py-5">
      <Container>
        <h1 className="fw-bold display-4 text-primary" data-aos="fade-down">
          Are You Ready?
        </h1>
        <p className="fs-5 mt-3" data-aos="fade-up">
          Most people will scroll past this. But not you.
        </p>
        <p className="fs-5" data-aos="fade-up" data-aos-delay="200">
          You’re here because you don’t just follow trends—you create them. You
          don’t wait for the future to happen—you make it happen.
        </p>
        <p className="fs-5 fw-bold text-danger" data-aos="zoom-in">
          And guess what? The future isn’t coming. It’s already here.
        </p>
        <p className="fs-5" data-aos="fade-left">
          AI isn’t just a tool—it’s your ultimate advantage. It works when you
          sleep, thinks faster than you can type, and learns every second to
          serve you better.
        </p>
        <p className="fs-5 text-success" data-aos="fade-right">
          Still thinking? That’s okay. But while others hesitate, the innovators
          act.
        </p>
        <h3 className="fw-bold text-dark" data-aos="flip-up">
          So, the question is: Will you lead or be left behind?
        </h3>

        <Button 
          variant="primary" 
          size="lg" 
          className="mt-4 px-5 py-3 mb-5 fw-bold"
          data-aos="zoom-in"
        >
          <FaRocket className="me-2" /> Try It Now
        </Button>
      </Container>
    </div>
  );
};

export default AIPromoPage;
