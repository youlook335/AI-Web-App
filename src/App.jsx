import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Faqs from "./component/Faqs";
import Projects from "./component/Projects";
import Help from "./component/Help";
import Services from "./component/Services";
import Blog from "./component/Blog";
import Privacy from "./component/Privacy";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/Home" element={< Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Privacy" element={<Privacy />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Faqs" element={<Faqs />} />
                <Route path="/Help" element={<Help />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;
