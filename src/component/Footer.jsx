import React from "react";
import "../Styles/Footer.css";
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-4">
                        <Link className="navbar-brand fw-bold text-dark" to="/">
                            <h4>
                                Boot<span className="fw-bold text-primary">Press</span>
                            </h4>
                        </Link>{" "}
                        <p className="text-muted">Revolutionizing the way you search with AI-powered innovation.</p>
                        <p className="text-dark">
                            <FaEnvelope className="fw-bold text-primary" /> contact@bootpress.com
                        </p>
                        <p className="text-dark">
                            <FaPhone className="fw-bold text-primary" /> +1 234 567 890
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 mb-4">
                        <h5 className="fw-bold text-primary">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Home" className="footer-link hover-underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/About" className="footer-link hover-underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/Blog" className="footer-link hover-underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/Services" className="footer-link hover-underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="footer-link hover-underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-lg-2 mb-4">
                        <h5 className="fw-bold text-primary">Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Faqs" className="footer-link hover-underline">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link to="/Features" className="footer-link hover-underline">
                                    Feature
                                </Link>
                            </li>
                            <li>
                                <Link to="/Privacy" className="footer-link hover-underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/Services" className="footer-link hover-underline">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/Help" className="footer-link hover-underline">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-4">
                        <h5 className="fw-bold text-primary">Newsletter</h5>
                        <p>Stay updated with our latest news and offers.</p>
                        <div className="input-group">
                            <input type="email" className="form-control search-input" placeholder="Enter your email" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="text-muted" />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted mb-0">&copy; 2025 Bootpress. All Rights Reserved.</p>
                    <div>
                        <a href="#" className="social-icon">
                            <FaFacebook size={22} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaTwitter size={22} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaLinkedin size={22} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaInstagram size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
