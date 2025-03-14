import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "react-bootstrap";
import CountdownTimer from "./Offer";

// Pricing Card Component
const PricingCard = ({ title, price, features, description }) => {
  // قیمت سے ڈالر کا نشان ہٹا کر نمبر میں کنورٹ کرنا
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
  const discountedPrice = (numericPrice * 0.9).toFixed(2); // 10% رعایت

  return (
    <Card 
      className="text-dark bg-light shadow-lg rounded-4 p-4 text-center border border-primary"
      data-aos="flip-left"
    >
      <Card.Header className="fs-4 fw-bold text-primary">{title}</Card.Header>
      <Card.Body>
        <h4 className="mb-3 text-muted">
          <del className="text-danger">{price}</del> → <span className="text-success">${discountedPrice}/month</span>
        </h4>
        <p className="text-muted mb-3">{description}</p>
        <ul className="list-unstyled mb-4">
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-center justify-content-center gap-2">
              {feature}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

// Pricing Section Component
const Psection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const plans = [
    {
      title: "Basic Plan",
      price: "$19/month",
      description: "Perfect for individuals starting out in digital marketing.",
      features: [
        "Ad Management",
        "Basic Analytics",
        "Email Support",
        "Access to Community Forum",
        "Monthly Performance Reports",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$99/month",
      description: "Designed for enterprises needing full AI automation.",
      features: [
        "AI-Powered Ad Optimization",
        "Automated Performance Analytics",
        "AI-Driven Target Audience Selection",
        "24/7 AI Customer Support Bot",
        "Real-time Budget Optimization",
        "Custom API Access",
        "Dedicated Account Manager",
        "Unlimited Ad Campaigns",
      ],
    },
    {
      title: "Pro Plan",
      price: "$49/month",
      description: "Ideal for growing businesses looking for AI-driven insights.",
      features: [
        "AI Ad Optimization",
        "Advanced Analytics",
        "Priority Support",
        "A/B Testing Tools",
        "Social Media Integration",
        "Weekly AI Insights",
      ],
    },
  ];

  return (
    <div className="container py-5 bg-light" data-aos="fade-up">
      <div className="row g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4">
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <CountdownTimer/>
    </div>
    </div>
  );
};

export default Psection;
