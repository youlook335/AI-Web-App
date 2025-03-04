import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`sticky-top navbar navbar-expand-lg custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-dark" to="/Home">
          Boot<span className="text-primary">Press</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-dark" /> : <FaBars className="text-dark" />}
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/Home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/Faqs" onClick={() => setMenuOpen(false)}>
                Faqs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline " to="/Help" onClick={() => setMenuOpen(false)}>
                Help
              </Link>
            </li>
          </ul>

          {/* Search Bar - Hide on Small Screens */}
          <form className="d-none d-lg-flex ms-3">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-primary ms-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
