import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import { FaAngleRight, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate('/contactpage');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-section logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav Links */}
        <ul className={`navbar-section nav-links ${menuOpen ? 'mobile-visible' : ''}`}>
          <li onClick={toggleMenu}><Link to="/">HOME</Link></li>
          <li onClick={toggleMenu}><Link to="/aboutpage">ABOUT</Link></li>
          <li onClick={toggleMenu}><Link to="/ourwork">OUR WORK</Link></li>
          <li onClick={toggleMenu}><Link to="/servicepage">SERVICES</Link></li>
        </ul>

        {/* Desktop Button */}
        <div className="navbar-section right desktop-only">
          <button className="contact-button" onClick={handleContactClick}>
            Contact Us <span className="arrow"><FaAngleRight /></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
