import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactpage');
  };
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
          <li><Link to = "/aboutpage">ABOUT</Link></li>
          <li><Link to ='/ourwork'>OUR&nbsp;WORK</Link> </li>
          <li><Link to ='/servicepage'>SERVICES</Link></li>
        </ul>

        <div className="navbar-section right">
          <button className="contact-button" onClick={handleContactClick}>
            Contact Us <span className="arrow"><FaAngleRight /></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
