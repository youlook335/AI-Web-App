import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRobot,
    faHeadset,
    faChartBar,
    faImage,
    faMicrophoneAlt,
    faCogs,
    faBullhorn,
    faHospital,
    faShoppingCart,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Services.css";

interface Service {
    icon: any;
    title: string;
    description: string;
    features: string[];
}

const services: Service[] = [
    {
        icon: faRobot,
        title: "AI Chatbots Development",
        description: "Our intelligent AI chatbots automate customer support for your business.",
        features: [
            "24/7 automated response",
            "Natural Language Processing (NLP)",
            "Enhanced customer interaction",
            "WhatsApp, website, and social media integration",
        ],
    },
    {
        icon: faHeadset,
        title: "AI-Powered Virtual Assistants",
        description: "Our AI virtual assistants provide automation solutions to help businesses operate more efficiently.",
        features: ["Automated tasks", "Smart reminders", "Voice command support", "Customer data analysis"],
    },
    {
        icon: faChartBar,
        title: "AI-Driven Data Analytics",
        description: "Our AI analysis tools provide in-depth insights into your data.",
        features: [
            "Data mining and forecasting",
            "Business intelligence reports",
            "Machine learning models",
            "Real-time data visualization",
        ],
    },
    {
        icon: faImage,
        title: "AI Image & Video Processing",
        description: "We use advanced AI algorithms for image and video processing.",
        features: [
            "Image recognition",
            "Automated video analysis",
            "Facial recognition",
            "Automated content monitoring",
        ],
    },
    {
        icon: faMicrophoneAlt,
        title: "AI-Based Voice Recognition",
        description: "Our voice recognition service enables businesses to operate through voice commands.",
        features: ["Speaker identification", "Voice-to-text conversion", "Multi-language support", "Command integration"],
    },
    {
        icon: faBullhorn,
        title: "AI in Digital Marketing",
        description: "Our AI-driven digital marketing services help businesses grow rapidly.",
        features: [
            "AI-based ad targeting",
            "Automated content creation",
            "Smart SEO intelligence",
            "Data-driven marketing strategies",
        ],
    },
    {
        icon: faHospital,
        title: "AI in Healthcare",
        description: "Our AI solutions are transforming the medical industry.",
        features: [
            "Medical image analysis",
            "Predictive diagnosis",
            "Digital health assistants",
            "Electronic health record analysis",
        ],
    },
    {
        icon: faShoppingCart,
        title: "AI in E-Commerce",
        description: "Our AI solutions enhance online businesses with smart automation.",
        features: [
            "Personalized product recommendations",
            "AI-powered customer support chatbots",
            "AI-based inventory management",
            "Price optimization",
        ],
    },
    {
        icon: faShieldAlt,
        title: "AI Security & Fraud Detection",
        description: "We utilize AI to enhance security and prevent fraud.",
        features: [
            "Facial recognition security",
            "Fake data analysis",
            "AI-based cybersecurity systems",
            "Automated phishing detection",
        ],
    },
];

const Services1: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // اینیمیشن کا دورانیہ
            once: true, // ایک بار اینیمیشن چلے گی
        });
    }, []);

    return (
        <div className="container bg-light">
            <div className="row">
                {services.map((service, index) => (
                    <div
                        className="col-md-4 mb-4"
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // alternating animations
                    >
                        <div className="card shadow-sm" data-aos="zoom-in">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3 privacy-icon" />
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
        </div>
    );
};

export default Services1;
