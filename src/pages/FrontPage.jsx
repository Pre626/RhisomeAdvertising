import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function FrontPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/homepage");
  };

  return (
    <div className="hero-container">
      {/* 1. Heading */}
      <h1 className="main-heading heading-animate">
        RHISOME <br /> ADVERTISING
      </h1>

      {/* 2. Astronaut & Button */}
      <div className="astro-button-group">
        <img src="/astronaut.png" className="astronaut astronaut-animate" alt="astronaut" />
        <div className="button-wrapper button-animate">
          <button className="custom-button" onClick={handleClick}>
            Start the Journey
          </button>
        </div>
      </div>

      {/* 3. Icons */}
      <div className="icon-container">
        <img src="/comments.png" className="icon icon1" alt="comment" />
        <img src="/love.png" className="icon icon2" alt="like" />
        <img src="/like.png" className="icon icon3" alt="like" />
        <img src="/like.png" className="icon icon4" alt="like" />
      </div>
    </div>
  );
}

export default FrontPage;
