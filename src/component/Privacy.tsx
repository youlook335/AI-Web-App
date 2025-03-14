import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Card } from "react-bootstrap";
import {
    FaBrain,
    FaBullhorn,
    FaBalanceScale,
    FaShieldAlt,
    FaGlobe,
    FaLock,
    FaUserShield,
    FaServer,
    FaClock,
    FaComments,
    FaUser,
    FaDatabase,
    FaGavel,
    FaHandshake,
    FaClipboardCheck,
    FaChartLine,
    FaCreditCard,
    FaEnvelope,
    FaLaptop,
} from "react-icons/fa";
import "../Styles/Privacy.css";

const Privacy: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // اینیمیشن کا دورانیہ
            once: true, // ایک بار اینیمیشن چلے گی
        });
    }, []);

    return (
        <Container className="my-5">
            <Card className="privacy-card p-4" data-aos="fade-up">
                <h2 className="text-center text-primary fs-1 fw-bold" data-aos="zoom-in">
                    Privacy Policy
                </h2>
                <p className="text-muted text-center" data-aos="fade-up">Last Updated: March 2025</p>
                <p data-aos="fade-up">
                    Welcome to <strong className="fs-6">Bootpress</strong> ("we," "us," or "our"). Your privacy is
                    important to us, and we are committed to protecting the personal information you share with us. This
                    Privacy Policy outlines our practices regarding data collection, storage, usage, and protection.
                </p>

                <h4 data-aos="fade-right">
                    <FaUserShield className="privacy-icon" /> Information We Collect
                </h4>
                <p data-aos="fade-right">We collect different types of information to provide and improve our AI-powered services:</p>
                <ul className="list-unstyled">
                    <li className="fs-6" data-aos="fade-up">
                        <FaUser className="me-4 privacy-icon" /> <strong>Personal Information:</strong> Name, email, phone number, and other account details.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaComments className="me-4 privacy-icon" /> <strong>AI Interaction Data:</strong> Text inputs, queries, chat history, and user preferences.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaLaptop className="me-4 privacy-icon" /> <strong>Usage & Technical Data:</strong> IP address, device type, browser details, and location data.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaChartLine className="me-4 privacy-icon" /> <strong>Behavioral Data:</strong> How users interact with our platform, preferences, and feature usage.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaCreditCard className="me-4 privacy-icon" /> <strong>Payment Data:</strong> Securely processed via third-party providers (we do not store payment details).
                    </li>
                </ul>

                <h4 data-aos="fade-left">
                    <FaDatabase className="privacy-icon" /> How We Store & Protect Your Data
                </h4>
                <p data-aos="fade-left">We take security seriously and implement strong measures to safeguard your data:</p>
                <ul className="list-unstyled">
                    <li className="fs-6" data-aos="fade-up">
                        <FaLock className="me-4 privacy-icon" /> <strong>Encryption:</strong> Sensitive data is encrypted both in transit and at rest.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaUserShield className="me-4 privacy-icon" /> <strong>Access Controls:</strong> Only authorized personnel can access user data.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaServer className="me-4 privacy-icon" /> <strong>Secure Infrastructure:</strong> Data is stored on high-security cloud servers.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaShieldAlt className="me-4 privacy-icon" /> <strong>Regular Security Audits:</strong> Frequent testing and monitoring to detect vulnerabilities.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaClock className="me-4 privacy-icon" /> <strong>Data Retention:</strong> We store data only as long as necessary for service functionality.
                    </li>
                </ul>

                <h4 data-aos="fade-right">
                    <FaClipboardCheck className="privacy-icon" /> Third-Party Sharing
                </h4>
                <p data-aos="fade-right">We do not sell your personal information, but we may share limited data with:</p>
                <ul className="list-unstyled">
                    <li className="fs-6" data-aos="fade-up">
                        <FaServer className="me-4 privacy-icon" /> <strong>Service Providers:</strong> Hosting, analytics, and payment processing services.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaGavel className="me-4 privacy-icon" /> <strong>Legal Authorities:</strong> If required by law, fraud prevention, or security purposes.
                    </li>
                    <li className="fs-6" data-aos="fade-up">
                        <FaHandshake className="me-4 privacy-icon" /> Collaboration on new features and improvements.
                    </li>
                </ul>

                <h4 data-aos="fade-left">
                    <FaShieldAlt className="privacy-icon" /> Updates to This Policy
                </h4>
                <p className="fs-6" data-aos="fade-left">
                    We periodically review and update our Privacy Policy. Any modifications will be reflected on this
                    page with an updated date. Users will be notified of major changes via email or website alerts.
                </p>
                <p className="fs-6" data-aos="fade-left">
                    <strong>Last updated on:</strong> [Date]
                </p>

                <h4 data-aos="zoom-in">
                    <FaEnvelope className="privacy-icon" /> Contact Us
                </h4>
                <p className="fs-6" data-aos="fade-up">If you have any questions regarding this Privacy Policy, please reach out to:</p>
                <p className="fs-6" data-aos="fade-up">
                    <FaEnvelope className="me-3 privacy-icon" /> <strong>Email:</strong> youloos477@gmail.com
                </p>
                <p className="fs-6" data-aos="fade-up">
                    <FaGlobe className="me-3 privacy-icon" /> <strong>Website:</strong> [Your Website URL Unknown]
                </p>
            </Card>
        </Container>
    );
};

export default Privacy;