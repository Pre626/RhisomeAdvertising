import React from "react";
import "./About.css";
import AboutImage from "../../../public/Aboutimg.png"; 
const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="text-content">
          <div className="about-heading">
            <h2>ABOUT US</h2>  
          </div>
          <p className="about-desc">
          We’re not just a creative agency we’re your extended team. At Rhisome, 
          <br />we believe in building partnerships, not collecting clients. From scroll-<br />
          stopping reels to thumb stopping designs, we turn ideas into impact.
          </p>
          <div className="cards">
            <div className="about-card">
            <div className="card-header">
                <img src="/missionlogo.png" alt="Mission Icon" className="card-icon" />
                <h3>MISSION</h3>
            </div>
              <p>
                Our mission at Rhisome is to empower brands with innovative digital solutions, fostering their growth and success in an ever-evolving marketplace.
              </p>
            </div>
            <div className="about-card">
            <div className="card-header">
            <img src="/visionlogo.png" alt="Vision Icon" className="card-icon" />
            <h3>VISION</h3>
            </div>
              <p>
                Our vision at Rhisome is to redefine the standards of brand success in the digital age by creating impactful experiences that resonate with audiences globally.
              </p>
            </div>
          </div>
        </div>

        <div className="about">
          <img src={AboutImage} alt="Astronaut" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
