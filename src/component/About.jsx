import React from "react";
import {Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css";
import Hero from "./Mean-about/Hero";
import Benefits from "./First/Benefits";
import TeamSection from "./First/TeamSection";
import Ourabout from "./Mean-about/Ourabout";
import AIPromoPage from "./Mean-about/AIPromoPage";
import AIFeatures from "./Mean-about/AIFeatures";
import AIFeatures1 from "./Mean-about/AIFeatures1";

const AboutUs = () => {
    return (
        <>
            <div className="bg-light">
                <Container className=" about-container bg-light">
                    <div className="container-fluid py-5 bg-light">
                        <Hero />
                        <Ourabout />
                        <TeamSection />
                        <Benefits />
                    </div>
                    <div className="text-center">
                        <Button variant="" className="text center cta-primary" href="youloos477@gmail.com">
                            Contact Us
                        </Button>
                    </div>
                    <AIFeatures1 />
                    <AIFeatures />
                    <div className="mt-5">
                        <AIPromoPage />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AboutUs;
