import React from 'react';
import './Agency.css';

const Agency = () => {
  return (
    <section className="hero">
      {/* Left Column */}
      <div className="hero-left-wrapper">
        <div className="hero-left">
          <h1>
            <span>We are</span> <br />
          </h1>
        </div>
        <div className="hero-left2">
          <h1>
            <span>Creative <br />Agency</span> <br />
          </h1>
        </div>
        <div className="hero-para">
          <p>
            TRANSFORMING YOUR DIGITAL PRESENCE WITH UNIQUE IDEAS AND MIND BLOWING DESIGNS.
          </p>
          <button className="hero-button">READ MORE</button>
        </div>
      </div>

      {/* Right Column - Astronaut Section */}
      <div className="hero-right">

        {/* Rotated Texts */}
        <h2 className="text-growth">GROWTH</h2>
        <h2 className="text-web">WEB</h2>
        <h2 className="text-design">DESIGN</h2>

      {/* Right Column */}
      <div className="astro-wrapper">
        <img src="/AgencyImage.png" alt="Creative Design" className="astronaut-img" />
      </div>
       {/* Floating "BRAND" Label */}
       <div className="brand-label">
            <img src="/heart.png" alt="Heart" className="heart-icon" />
            <span className="brand-text">BRAND</span>
          </div>
        </div>


      <div className="icon-container">
        <img src="/comment2.png" className="icon icon6" alt="comment" />
        <img src="/love2.png" className="icon icon7" alt="love" />
        <img src="/like2.png" className="icon icon8" alt="like" />
        </div>


    </section>
  );
};

export default Agency;