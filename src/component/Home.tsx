import React from "react";
import Features from "./First/Featureshome";
import Benefits from "./First/Benefits";
import Pricing from "./First/Pricing";
import TeamSection from "./First/TeamSection";
import HeroSection from "./First/HeroSection";
import Testimonial from "./First/Testimonials";
import FaQ from "./First/FaQ";

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <Features />
            <TeamSection />
            <Benefits />
            <Pricing />
            <Testimonial />
            <FaQ />
        </>
    );
};

export default Home;
