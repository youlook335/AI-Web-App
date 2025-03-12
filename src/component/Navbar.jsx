import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import "../Styles/Navbar.css";
import {FaBars, FaTimes, FaChevronDown} from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const searchInputRef = useRef(null);

    // Navbar Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === "m") {
                setMenuOpen((prev) => !prev);
            } else if (event.ctrlKey && event.key === "s") {
                event.preventDefault();
                setSearchActive(true);
                setTimeout(() => searchInputRef.current?.focus(), 100);
            } else if (event.key === "Escape") {
                setSearchActive(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="container">
                    <Link className="navbar-brand fw-bold text-dark" to="/">
                        Boot<span className="text-primary">Press</span>
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-dark" /> : <FaBars className="text-dark" />}
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-dark hover-underline"
                                    to="/"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li
                                className="nav-item dropdown"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <Link className="nav-link text-dark hover-underline" to="#">
                                    Drop Menu <FaChevronDown className="ms-1" />
                                </Link>
                                {dropdownOpen && (
                                    <ul className="dropdown-menu show">
                                        <li>
                                            <Link className="dropdown-item" to="/About">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/Faqs">
                                                Faqs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/Blog">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/Privacy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/Services">
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/Features">
                                                Feature
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/Pricing">
                                            Pricing
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-dark hover-underline"
                                    to="/contact"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-dark hover-underline"
                                    to="/Help"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Help
                                </Link>
                            </li>
                        </ul>

                        <form className="d-none d-lg-flex ms-3">
                            <input
                                ref={searchInputRef}
                                className="form-control search-input"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </form>

                        <div className="d-flex gap-2 ms-3">
                            <Link to="/login" className="btn btn-outline-primary">
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-primary">
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {searchActive && (
                <div className="search-overlay" onClick={() => setSearchActive(false)}>
                    <div className="search-box" onClick={(e) => e.stopPropagation()}>
                        <input
                            ref={searchInputRef}
                            className="form-control"
                            type="search"
                            placeholder="Type to search..."
                            aria-label="Search"
                        />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
