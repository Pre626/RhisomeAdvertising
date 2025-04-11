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
      <h1 className="main-heading">
        RHISOME <br /> ADVERTISING
      </h1>

      <div className="icon-container">
        <img src="/comments.png" className="icon icon1" alt="comment" />
        <img src="/love.png" className="icon icon2" alt="like" />
        <img src="/like.png" className="icon icon3" alt="like" />
        <img src="/like.png" className="icon icon4" alt="like" />
        <img src="/astronaut.png" className="astronaut" alt="astronaut" />
      </div>

      <div className="button-wrapper">
        <button className="custom-button" onClick={handleClick}>
          Start the Journey
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
