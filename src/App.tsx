import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Faqs from "./component/Faqs";
import Help from "./component/Help";
import Blog from "./component/Blog";
import Privacy from "./component/Privacy";
import Feature from "./component/Feature";
import Price from "./component/Price";
import PricingSection from "./component/First/Pricing";

const App: React.FC = () => {
    return (
        <>
        <div className="bg-light">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Privacy" element={<Privacy />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Features" element={<Feature />} />
                <Route path="/Offer" element={<Price />} />
                <Route path="/Pricing" element={<PricingSection />} />
                <Route path="/Faqs" element={<Faqs />} />
                <Route path="/Help" element={<Help />} />
            </Routes>
            </div>
        </>
    );
};

export default App;
