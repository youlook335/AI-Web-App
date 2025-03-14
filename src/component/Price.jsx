import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { TypeAnimation } from "react-type-animation";
import Psection from "./Psection";

const ServicesOffers = () => {


  const startConfetti = () => {
    const duration = 100000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 15,
        startVelocity: 50,
        spread: 70,
        origin: {
          x: Math.random(),
          y: Math.random() * 3,
        },
        gravity: 0.4,
        ticks: 150,
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  useEffect(() => {
      const confettiTimeout = setTimeout(() => {
        startConfetti();
      }, 1000);

      return () => clearTimeout(confettiTimeout);
    }
  )
  return (
    <>
        <h1 className=" pt-5 text-center">
          <TypeAnimation
            sequence={["Special Offer In Pricing", 1000, "", 500]}
            wrapper="span"
            speed={50}
            style={{ color: "#007bff", fontWeight: "bold" }}
            repeat={Infinity}
          />
        </h1>
        <Psection/>

</>
  );
};

export default ServicesOffers;
