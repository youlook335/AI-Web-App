import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCheck, FaChartPie, FaCog } from "react-icons/fa";

const HeroSection: React.FC = () => {
    const [users, setUsers] = useState<number>(500);
    const [tasks, setTasks] = useState<number>(1000);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const interval = setInterval(() => {
            setUsers((prev) => prev + Math.floor(Math.random() * 5));
            setTasks((prev) => prev + Math.floor(Math.random() * 20));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="hero text-white py-5"
            style={{
                background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <div className="container">
                <h1 className="display-2 fw-bold" data-aos="fade-down">
                    AI - The Future of Automation
                </h1>
                <p className="lead mt-3" data-aos="fade-up">
                    Smart, Fast, and Reliable AI-powered solutions tailored for you.
                </p>
                <div className="mt-4" data-aos="zoom-in">
                    <a href="/Contact" className="btn btn-lg btn-warning px-5 py-2 fw-bold">
                        Start Exploring
                    </a>
                </div>

                <div className="row text-center mt-5">
                    <div className="col-md-4" data-aos="flip-left">
                        <FaUserCheck size={50} className="text-success mb-2" />
                        <h3>{users}+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="col-md-4" data-aos="flip-up">
                        <FaChartPie size={50} className="text-warning mb-2" />
                        <h3>{tasks}+</h3>
                        <p>Tasks Automated</p>
                    </div>
                    <div className="col-md-4" data-aos="flip-right">
                        <FaCog size={50} className="text-danger mb-2" />
                        <h3>99.9%</h3>
                        <p>AI Accuracy</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
