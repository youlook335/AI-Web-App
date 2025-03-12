import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRobot,
    faBrain,
    faCloud,
    faLock,
    faChartBar,
    faLaptop,
    faBullseye,
    faCog,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Services.css";
import Services1 from "./Services1";

interface Service {
    icon: any;
    title: string;
    description: string;
    features: string[];
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            icon: faRobot,
            title: "AI Chatbot",
            description: "Automated and intelligent customer support using NLP and Machine Learning.",
            features: [
                "24/7 Automated Support",
                "Multilingual Support",
                "CRM & Social Media Integration",
                "Intelligent Responses",
            ],
        },
        {
            icon: faCloud,
            title: "Cloud AI Services",
            description: "Scalable and secure AI solutions using AWS, Google Cloud, and Azure.",
            features: [
                "Powerful AI without additional infrastructure",
                "Data Security and High-speed Processing",
                "Multi-platform Integration",
                "AI-as-a-Service (AIaaS)",
            ],
        },
        {
            icon: faBrain,
            title: "Machine Learning",
            description: "Data-driven learning technology that empowers your business decisions.",
            features: ["Predictive Analysis", "Automated Decision Making", "Anomaly Detection", "Real-time Learning"],
        },
        {
            icon: faLock,
            title: "AI Security",
            description: "Advanced AI security solutions to safeguard your data.",
            features: [
                "Threat Detection & Prevention",
                "AI-based Firewalls & Encryption",
                "Behavioral Analysis",
                "Automated Incident Response",
            ],
        },
        {
            icon: faChartBar,
            title: "Data Analytics",
            description: "Extract valuable insights from data using AI-driven analytics.",
            features: [
                "Descriptive, Predictive & Prescriptive Analytics",
                "AI-based Visualization",
                "Market Trends & Customer Insights",
                "Automated Reports & Dashboards",
            ],
        },
        {
            icon: faLaptop,
            title: "AI Development",
            description: "Custom AI solutions tailored to your business needs.",
            features: [
                "Custom AI Model Development",
                "Image & Video Recognition AI",
                "Voice Assistants & Speech Recognition",
                "Automated Workflows",
            ],
        },
        {
            icon: faBullseye,
            title: "AI for Customer Engagement",
            description: "Enhance customer interaction with AI-driven tools.",
            features: [
                "Chatbots & Virtual Assistants",
                "Personalized Recommendations",
                "Social Media AI Automation",
                "Customer Sentiment Analysis",
            ],
        },
        {
            icon: faCog,
            title: "AI Automation",
            description: "Automate your business operations using AI-powered systems.",
            features: [
                "Business Process Automation",
                "Robotic Process Automation (RPA)",
                "Smart AI Scheduling & Management",
                "Automated Customer Onboarding",
            ],
        },
        {
            icon: faSearch,
            title: "Big Data & AI",
            description: "Real-time data processing and intelligent analysis for your business.",
            features: [
                "AI-driven Data Mining & Pattern Recognition",
                "Scalable Big Data Processing",
                "Predictive & Prescriptive Analytics",
                "Industry-specific AI Solutions",
            ],
        },
    ];

    return (
        <div className="bg-light mt-2">
            <div className="container bg-light">
                <h1 className="my-5 text-center">AI Services - The Future of Advanced Technology</h1>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <div className="card-body privacy-icon text-center">
                                    <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3" />
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <ul>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Services1 />
            </div>
        </div>
    );
};

export default Services;
