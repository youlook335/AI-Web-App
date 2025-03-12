import React from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

function PricingCard({title, price, features, buttonText, description}) {
    return (
        <Card className="text-dark bg-light shadow-lg rounded-4 p-4 text-center border border-primary">
            <Card.Header className="fs-4 fw-bold text-primary">{title}</Card.Header>
            <Card.Body>
                <h2 className="fw-bold mb-3 text-dark">{price}</h2>
                <p className="text-muted mb-3">{description}</p>
                <ul className="list-unstyled mb-4">
                    {features.map((feature, index) => (
                        <li key={index} className="d-flex align-items-center justify-content-center gap-2">
                            {feature}
                        </li>
                    ))}
                </ul>
                <Button variant="primary" className="rounded-pill px-4 py-2">
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default function PricingSection() {
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
            buttonText: "Get Started",
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
            buttonText: "Contact Us",
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
            buttonText: "Upgrade Now",
        },
    ];

    return (
        <div className="container py-5 bg-light">
            <h2 className="text-center fs-1 fw-bold mb-5 text-primary">Pricing Plans</h2>
            <div className="row g-4">
                {plans.map((plan, index) => (
                    <div key={index} className="col-md-4">
                        <PricingCard {...plan} />
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <Link to="/Price">
                    <Button variant="outline-primary" className="rounded-pill px-4 py-2">
                        Your Own Offer
                    </Button>
                </Link>
            </div>
        </div>
    );
}