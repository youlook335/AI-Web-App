import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Blog from "./component/Blog";
import Privacy from "./component/Privacy";
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import Price from "./component/Price";
import PricingSection from "./component/First/Pricing";
import Faqs from "./component/Faqs";
import Help from "./component/Help";
import Login from "./component/Login";
import Signup from "./component/Signup";

const App: React.FC = () => {
    return (
        <div className="bg-light">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Feature />} />
                <Route path="/offer" element={<Price />} />
                <Route path="/pricing" element={<PricingSection />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default App;
