import React, {useState, useEffect} from "react";
import {FaUserCheck, FaChartPie, FaCog} from "react-icons/fa";

function HeroSection() {
    const [users, setUsers] = useState(500);
    const [tasks, setTasks] = useState(1000);

    useEffect(() => {
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
                <h1 className="display-2 fw-bold">AI - The Future of Automation</h1>
                <p className="lead mt-3">Smart, Fast, and Reliable AI-powered solutions tailored for you. </p>
                <div className="mt-4">
                    <a href="/Contact" className="btn btn-lg btn-warning px-5 py-2 fw-bold">
                        Start Exploring
                    </a>
                </div>

                <div className="row text-center mt-5">
                    <div className="col-md-4">
                        <FaUserCheck size={50} className="text-success mb-2" />
                        <h3>{users}+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="col-md-4">
                        <FaChartPie size={50} className="text-warning mb-2" />
                        <h3>{tasks}+</h3>
                        <p>Tasks Automated</p>
                    </div>
                    <div className="col-md-4">
                        <FaCog size={50} className="text-danger mb-2" />
                        <h3>99.9%</h3>
                        <p>AI Accuracy</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
