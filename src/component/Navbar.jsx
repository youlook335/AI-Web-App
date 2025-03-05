import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-dark" to="/">
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
              <Link className="nav-link text-dark hover-underline" to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            {/* Drop down Menu */}
            <li className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link className="nav-link text-dark hover-underline dropdown-toggle" to="#">
                Drop down
              </Link>
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  <li><Link className="dropdown-item" to="/about">About</Link></li>
                  <li><Link className="dropdown-item" to="/Faqs">Faqs</Link></li>
                  <li><Link className="dropdown-item" to="/services">Services</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline" to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark hover-underline" to="/Help" onClick={() => setMenuOpen(false)}>
                Help
              </Link>
            </li>
          </ul>
          <form className="d-none d-lg-flex ms-3">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search...                 Ctrl+K"
              aria-label="Search"
            />
          </form>
          <div className="d-flex gap-2 ms-3">
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
            <Link to="/signup" className="btn btn-primary">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
