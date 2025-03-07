import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaRocket, FaBrain, FaEnvelopeOpenText, FaGlobeAmericas } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AIPromoPage = () => {
  return (
    <div className="bg-light  align-items-center justify-content-center text-center">
      <Container>
        <h1 className="fw-bold display-4 text-primary">Are You Ready?</h1>
        <p className="fs-5 mt-3">
          Most people will scroll past this. But not you.
        </p>
        <p className="fs-5">
          You’re here because you don’t just follow trends—you create them. You don’t wait for the future to happen—you make it happen.
        </p>
        <p className="fs-5 fw-bold text-danger">And guess what? The future isn’t coming. It’s already here.</p>
        <p className="fs-5">
          AI isn’t just a tool—it’s your ultimate advantage. It works when you sleep, thinks faster than you can type, and learns every second to serve you better.
        </p>
        <p className="fs-5 text-success">
          Still thinking? That’s okay. But while others hesitate, the innovators act.
        </p>
        <h3 className="fw-bold text-dark">So, the question is: Will you lead or be left behind?</h3>
        
        <Button variant="primary" size="lg" className="mt-4 px-5 py-3 mb-5 fw-bold">
          <FaRocket className="me-2" /> Try It Now
        </Button>
        

      </Container>
    </div>
  );
};

export default AIPromoPage;
