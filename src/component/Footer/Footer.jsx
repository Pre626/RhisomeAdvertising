import React from "react";
import "./Footer.css";
// import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
  {/* Column 1: Branding & Social */}
  <div className="footer-section">
    <div className="footer-brand">
    <div className="footer-logo">
      <img src="./logo.png" alt="Rhisome Logo" className="footer-logo-img" />
    </div>
    </div>

    <div className="footer-social">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="./facebook.png" alt="Facebook" className="footer-icon-img" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src="./linkedin.png" alt="LinkedIn" className="footer-icon-img" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="./instagram.png" alt="Instagram" className="footer-icon-img" />
  </a>
</div>
  </div>

  {/* Column 2: Contact Details */}
  <div className="footer-section">
    <h3 className="footer-heading">Contact Detail</h3>
    <p className="font-para">
    <img src="./location.png" alt="Location" className="location-icon1" />
     OFFICE NO: 103, SHIVALIK KOTHRUD, MAYUR COLONY, KOTHRUD, PUNE 411038</p>
    <p className="font-para">
    <img src="./mail.png" alt="Location" className="location-icon2" />
    hellorhisome@gmail.com</p>
    <p className="font-para">
    <img src="./phone.png" alt="Location" className="location-icon3" />
    +91 8668806103</p>
  </div>

  {/* Column 3: Quick Links */}
  <div className="footer-section">
    <h3 className="footer-heading">Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>Projects</li>
      <li>Services</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
  </div>

  {/* Column 4: Our Services */}
  <div className="footer-section">
    <h3 className="footer-heading">Our Services</h3>
    <ul>
      <li>Branding</li>
      <li>Digital Marketing</li>
      <li>UI UX Design</li>
      <li>Web Development</li>
      <li>Design And Packaging</li>
    </ul>
  </div>
</div>
 {/* Move this outside the container */}
 <p className="copyright">
    Copyright © 2024 <span className ="headcopy">Rhisome Advertising Pvt. Ltd.</span>
  </p>

    </footer>
  );
};

export default Footer;
