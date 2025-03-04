import "./App.css";
import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Faqs from "./component/Faqs";
import Help from "./component/Help";
import Blog from "./component/Blog";
import Privacy from "./component/Privacy";
import ChatButton from "./component/ChatButton";
import Cursor from "./component/Cursor";
import WhatsAppButton from "./component/WhatsAppButton";

function App() {
    return (
        <>
        <Cursor/>
            <Navbar/>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Privacy" element={<Privacy />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Faqs" element={<Faqs />} />
                    <Route path="/Help" element={<Help />} />
                </Routes>
                <ChatButton/>
                <WhatsAppButton/>
            <Footer/>
        </>
    );
}

export default App;
