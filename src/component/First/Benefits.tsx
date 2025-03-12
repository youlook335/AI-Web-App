import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faChartLine,
  faLock,
  faRocket,
  faUsers,
  faHeadset,
  faCog,
  faShieldAlt,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Define Type for Benefit Item
interface BenefitItem {
  icon: IconDefinition;
  title: string;
  description: string;
  link: string;
}

const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: faLightbulb,
      title: "Innovative AI Solutions",
      description: "Leverage cutting-edge AI algorithms to automate tasks and enhance efficiency.",
      link: "/benefits/ai-solutions",
    },
    {
      icon: faChartLine,
      title: "Advanced Analytics",
      description: "Gain deep insights into your data with our powerful analytics and reporting tools.",
      link: "/benefits/analytics",
    },
    {
      icon: faLock,
      title: "Secure & Reliable",
      description: "We ensure top-tier security and encryption to safeguard your sensitive information.",
      link: "/benefits/security",
    },
    {
      icon: faRocket,
      title: "Boost Performance",
      description: "Enhance productivity and optimize workflows with AI-driven automation.",
      link: "/benefits/performance",
    },
    {
      icon: faUsers,
      title: "Seamless Collaboration",
      description: "Work efficiently with your team through real-time collaboration tools.",
      link: "/benefits/collaboration",
    },
    {
      icon: faHeadset,
      title: "24/7 Customer Support",
      description: "Get assistance anytime with our dedicated AI and human support team.",
      link: "/benefits/support",
    },
    {
      icon: faCog,
      title: "Customizable Features",
      description: "Tailor our platform to fit your business needs with flexible customization options.",
      link: "/benefits/customization",
    },
    {
      icon: faShieldAlt,
      title: "Scalable Solutions",
      description: "Our technology grows with your business, ensuring seamless scalability.",
      link: "/benefits/scalability",
    },
    {
      icon: faBrain,
      title: "AI-Powered Decision Making",
      description: "Make smarter business decisions with AI-driven predictive analytics and automation.",
      link: "/benefits/ai-decision-making",
    },
  ];

  return (
    <section className="benefits py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold text-primary mb-4">Why Choose Us?</h2>
        <p className="lead text-muted mb-5">Experience the future of AI-powered efficiency and growth.</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {benefits.map((benefit, index) => (
            <div className="col d-flex align-items-stretch" key={index}>
              <div className="card shadow-lg border-0 rounded-4 h-100 p-3 d-flex flex-column">
                <div className="card-body text-center flex-grow-1">
                  <FontAwesomeIcon icon={benefit.icon} size="3x" className="mb-3 text-primary" />
                  <h4 className="fw-bold mb-2 text-dark">{benefit.title}</h4>
                  <p className="text-muted">{benefit.description}</p>
                </div>
                <div className="pb-3 text-center">
                  <Link to={benefit.link} className="btn btn-primary mt-3">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
