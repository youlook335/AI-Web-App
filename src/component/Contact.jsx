import {useState} from "react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaGlobe} from "react-icons/fa";
import "../Styles/Contact.css";
import Map from "./Map";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        company: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        setFormData({company: "", firstName: "", lastName: "", phone: "", email: "", message: ""});
    };

    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-4 bg-light rounded-3 show-lg" style={{borderRadius: "12px"}}>
                            <h2 className="text-center mb-4 text-primary">Contact Us – Let’s Talk</h2>
                            <form className="p-4 bg-light shadow-sm rounded-3" onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="form-control rounded-3 shadow-sm"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="form-control rounded-3 shadow-sm"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="form-control rounded-3 shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control rounded-3 shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control rounded-3 shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-control no-resize rounded-3 shadow-sm"
                                        rows="5"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary rounded-3 shadow-sm ">
                                    Send Message
                                </button>
                                <div>
                                    <h5 className="mt-4 fs-4 fw-bold pt-2 text-dark">Connect with Us</h5>
                                    <div className="d-flex justify-content-start gap-3 mt-2">
                                        <a href="#" className="text-primary fs-3">
                                            <FaFacebook />
                                        </a>
                                        <a href="#" className="text-danger fs-3">
                                            <FaInstagram />
                                        </a>
                                        <a href="#" className="text-primary fs-3">
                                            <FaLinkedin />
                                        </a>
                                        <a href="#" className="text-dark fs-3">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 bg-light shadow-sm rounded-3 mb-4">
                            <h4 className="text-dark text-center">About Our AI Services</h4>
                            <p className="text-muted text-center">
                                We specialize in AI-powered solutions that transform businesses. From chatbots to
                                automation, we have the perfect AI solution for you.
                            </p>
                            <h4 className="mt-4 text-dark text-center">Talk to AI First!</h4>
                            <p className="text-muted text-center">
                                Before waiting for a reply, why not ask our AI? It’s designed to answer your questions
                                instantly.
                            </p>
                            <div className="text-center">
                                <button className="btn btn-dark rounded-3 shadow-sm">💬 Chat with AI Now</button>
                            </div>
                        </div>

                            <div className="p-4 bg-light shadow-sm rounded-3">
                            <h5 className="text-dark fw-bold fs-3 pb-3 text-center"> Contact Information</h5>
                            <p>
                                <FaPhone className="text-primary" /> <strong>Phone:</strong> +123 456 7890
                            </p>
                            <p>
                                <FaEnvelope className="text-primary" /> <strong>Email:</strong>{" "}
                                <a href="mailto:support@aiwebapp.com" className="text-decoration-none text-primary">
                                    support@aiwebapp.com
                                </a>
                            </p>
                            <p>
                                <FaGlobe className="text-primary" /> <strong>Website:</strong>{" "}
                                <a
                                    href="https://www.aiwebapp.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-primary"
                                >
                                    www.aiwebapp.com
                                </a>
                            </p>
                            <p>
                                <strong>Address:</strong> AI HQ – Where Innovation Meets Intelligence
                            </p>
                        </div>
                    </div>
                </div>
                <Map />
            </div>
        </>
    );
}