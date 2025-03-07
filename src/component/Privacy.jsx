import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaUserShield, FaLock, FaCookieBite, FaUserCog, FaEnvelope, FaGlobe, FaDatabase, FaRegHandshake, FaShieldAlt, FaClipboardCheck, FaServer, FaSyncAlt, FaAccessibleIcon } from "react-icons/fa";
import "../Styles/Privacy.css";
import { Database } from "react-bootstrap-icons";
import { BsController } from "react-icons/bs";
import { RiRemoteControlLine, RiSeoLine } from "react-icons/ri";
import { GrCompliance, GrSecure } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { TbPrompt } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { SiAuthentik } from "react-icons/si";
import { FcCollaboration } from "react-icons/fc";

const Privacy = () => {
  return (
    <Container className="my-5">
      <Card className="privacy-card">
        <h2 className="text-center text-primary fs-1 fw-bold ">Privacy Policy</h2>
        <p className="text-muted text-center">Last Updated: March 2025</p>
        <p > 
          Welcome to <strong className="fs-5">Bootpress</strong> ("we," "us," or "our"). Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy outlines our practices regarding data collection, storage, usage, and protection.
        </p>
        
        <h4><FaUserShield className="privacy-icon" />  Information We Collect</h4>
        <p>We collect different types of information to provide and improve our AI-powered services:</p>
        <ul className="list-unstyled">
          <li className="fs-5"><strong>Personal Information:</strong> Name, email, phone number, and other account detail</li>
          <li className="fs-5"><strong>AI Interaction Data:</strong> Text inputs, queries, chat history, and user preferences.</li>
          <li className="fs-5"><strong>Usage & Technical Data:</strong> IP address, device type, browser details, and location data.</li>
          <li className="fs-5"><strong>Behavioral Data:</strong> How users interact with our platform, preferences, and feature usage.</li>
          <li className="fs-5"><strong>Payment Data:</strong> Securely processed via third-party providers (we do not store payment details).</li>
        </ul>
        
        <h4><FaDatabase className="privacy-icon" /> How We Store & Protect Your Data</h4>
        <p>We take security seriously and implement strong measures to safeguard your data:</p>
        <ul className="list-unstyled">
          <li className="fs-5"> <Database className="privacy-icon"/><strong>Encryption:</strong> Sensitive data is encrypted both in transit and at rest.</li>
          <li className="fs-5"> <RiRemoteControlLine className="privacy-icon"/><strong>Access Controls:</strong> Only authorized personnel can access user data.</li>
          <li className="fs-5"> <GrSecure className="privacy-icon"/><strong>Secure Infrastructure:</strong> Data is stored on high-security cloud servers.</li>
          <li className="fs-5"> <MdSecurity className="privacy-icon"/><strong>Regular Security Audits:</strong> Frequent testing and monitoring to detect vulnerabilities.</li>
          <li className="fs-5"> <strong>Data Retention:</strong> We store data only as long as necessary for service functionality.</li>
        </ul>
        
        <h4><FaRegHandshake className="privacy-icon" /> How We Use Your Data</h4>
        <p>We use collected information to enhance our services:</p>
        <ul className="list-unstyled">
          <li className="fs-5"> <AiFillAlert className="privacy-icon"/>To improve AI response accuracy and personalization.</li>
          <li className="fs-5"> <RiSeoLine className="privacy-icon"/>To analyze trends and optimize system performance.</li>
          <li className="fs-5"> <TbPrompt className="privacy-icon"/>To communicate updates, promotions, or important notifications.</li>
          <li className="fs-5"><GrCompliance className="privacy-icon"/>To ensure compliance with legal and security regulations.</li>
          <li className="fs-5"> <FaAccessibleIcon className="privacy-icon"/>To prevent fraud and unauthorized access.</li>
        </ul>
        
        <h4><FaClipboardCheck className="privacy-icon" /> Third-Party Sharing</h4>
        <p>We do not sell your personal information, but we may share limited data with:</p>
        <ul className="list-unstyled">
          <li className="fs-5"><FaServicestack className="privacy-icon"/><strong>Service Providers:</strong> Hosting, analytics, and payment processing services.</li>
          <li className="fs-5"><SiAuthentik className="privacy-icon"/><strong>Legal Authorities:</strong> If required by law, fraud prevention, or security purposes.</li>
          <li className="fs-5"><FcCollaboration className="Privacy-icon" /> <strong>Business Partners:</strong> For collaboration on new features and improvements.</li>
        </ul>
        
        <h4><FaCookieBite className="privacy-icon" />  Cookies & Tracking Technologies</h4>
        <p>We use cookies and tracking technologies to enhance user experience:</p>
        <ul className="list-unstyled">
          <li className="fs-5"><strong>Essential Cookies:</strong> Required for core platform functionality.</li>
          <li className="fs-5"><strong>Analytical Cookies:</strong> Help us analyze usage and improve features.</li>
          <li className="fs-5"><strong>Marketing Cookies:</strong> Enable personalized advertisements.</li>
          <li className="fs-5"><strong>Preference Cookies:</strong> Store user settings and preferences.</li>
        </ul>
        
        <h4><FaUserCog className="privacy-icon" /> User Rights & Controls</h4>
        <p>We respect your rights regarding your personal data:</p>
        <ul className="list-unstyled">
          <li className="fs-5">📁 Access, update, or correct your personal information.</li>
          <li className="fs-5">📁 Request deletion of your account and associated data.</li>
          <li className="fs-5">📁 Opt-out of targeted advertisements and data tracking.</li>
          <li className="fs-5">📁 Download or export your data in a readable format.</li>
          <li className="fs-5">📁 Withdraw consent for data processing at any time.</li>
        </ul>
        <p>For inquiries regarding your rights, contact us at <strong>[Your Contact Email]</strong>.</p>
        
        <h4><FaSyncAlt className="privacy-icon" /> Data Retention Policy</h4>
        <p>We retain data only for as long as necessary for service functionality:</p>
        <ul className="list-unstyled">
          <li className="fs-5">📁 User accounts remain active unless manually deleted.</li>
          <li className="fs-5">📁 AI interaction history is stored temporarily for accuracy improvement.</li>
          <li className="fs-5">📁 Billing and transactional data are retained for legal compliance.</li>
          <li className="fs-5">📁 Expired or unused accounts are periodically purged from our system.</li>
        </ul>
        
        <h4><FaShieldAlt className="privacy-icon" /> Updates to This Policy</h4>
        <p className="fs-5">We periodically review and update our Privacy Policy. Any modifications will be reflected on this page with an updated date. Users will be notified of major changes via email or website alerts.</p>
        <p className="fs-5"><strong>Last updated on:</strong> [Date]</p>
        
        <h4><FaEnvelope className="privacy-icon" /> 9. Contact Us</h4>
        <p className="fs-6">If you have any questions regarding this Privacy Policy, please reach out to:</p>
        <p className="fs-6">📧 <strong>Email:</strong> [Your Contact Email]</p>
        <p className="fs-6">🌐 <strong>Website:</strong> [Your Website URL]</p>
      </Card>
    </Container>
  );
};

export default Privacy;