import React, {useState} from "react";
import HeroSection from "./First/HeroSection";
import Features from "./First/Features";
import Benefits from "./First/Benefits";
import Pricing from "./First/Pricing";
import FAQ from "./First/FAQ";
import Testimonials from "./First/Testimonials";
import TeamSection from "./First/TeamSection";
// import "../Styles/Home.css";

const Home = () => {
    return (
        <>
        <HeroSection/>
        <Features/>
        <TeamSection/>
        <Benefits/>
        <Pricing/>
        <Testimonials/>
        <FAQ/>
        </>
    );
};

export default Home;