import React from 'react';
import './About2.css';

const About2 = () => {
  return (
    <section className="about-section1">
      
      <div className="about-container">
        <div className="about-left">
          <h1>About Us</h1>
          <p className='desc'>
            We’re not just a creative agency we’re your extended team. At Rhisome, we believe in building partnerships, not collecting clients. From scroll-stopping reels to thumb-stopping designs, we turn ideas into impact.
          </p>
          <p>
            Every brand we work with becomes a part of our creative family. We brainstorm like it’s our own brand, strategize like we’re in it with you, and celebrate every win together. Whether it’s a reel that booms, a brand that speaks, or a story that connects, we’re here to make it happen beautifully.
          </p>
        </div>

        <div className="about-right">
  <div className="about-card1 vision">
    <div className="card-header">
      <img src="/visionlogo.png" alt="Vision Icon" className="card-icon" />
      <h2>VISION</h2>
    </div>
    <p>
      Our vision at Rhisome is to redefine the standards of brand success in the digital age by creating impactful experiences that resonate with audiences globally.
    </p>
  </div>

  <div className="about-card1 mission move-right">
    <div className="card-header">
      <img src="/missionlogo.png" alt="Mission Icon" className="card-icon" />
      <h2>MISSION</h2>
    </div>
    <p>
      Our mission at Rhisome is to empower brands with innovative digital solutions, fostering their growth and success in an ever-evolving marketplace.
    </p>
  </div>
</div>
  </div>
  
    </section>
  );
};

export default About2;
