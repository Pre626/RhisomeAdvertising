import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-section logo">
          <img src="/logo.png" alt="Logo" />
          <div className="logo-text">
          </div>
        </div>

        <ul className="navbar-section nav-links">
        <li><Link to="/">HOME</Link></li>
          <li>ABOUT</li>
          <li>OUR&nbsp;WORK</li>
          <li>SERVICES</li>
        </ul>

        <div className="navbar-section right">
          <button className="contact-button">
            Contact Us <span className="arrow">➔</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
