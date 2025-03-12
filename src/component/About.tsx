import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button } from "react-bootstrap";
import "../Styles/About.css";
import Hero from "./Mean-about/Hero";
import Benefits from "./First/Benefits";
import TeamSection from "./First/TeamSection";
import Ourabout from "./Mean-about/Ourabout";
import AIPromoPage from "./Mean-about/AIPromoPage";
import AIFeatures from "./Mean-about/AIFeatures";
import AIFeatures1 from "./Mean-about/AIFeatures1";

const AboutUs: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // اینیمیشن کا دورانیہ
            once: true, // صرف ایک بار اینیمیشن چلے گی
        });
    }, []);

    return (
        <>
            <div className="bg-light">
                <Container className="about-container bg-light">
                    <div className="container-fluid py-5 bg-light">
                        <div data-aos="fade-down">
                            <Hero />
                        </div>
                        <div data-aos="fade-up">
                            <Ourabout />
                        </div>
                        <div data-aos="fade-right">
                            <TeamSection />
                        </div>
                        <div data-aos="fade-left">
                            <Benefits />
                        </div>
                    </div>
                    <div className="text-center" data-aos="zoom-in">
                        <Button variant="primary" className="text-center cta-primary" href="mailto:youloos477@gmail.com">
                            Contact Us
                        </Button>
                    </div>
                    <div data-aos="fade-up">
                        <AIFeatures1 />
                    </div>
                    <div data-aos="fade-up">
                        <AIFeatures />
                    </div>
                    <div className="mt-5" data-aos="zoom-in">
                        <AIPromoPage />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AboutUs;
