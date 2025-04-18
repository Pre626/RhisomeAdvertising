import React from "react";
import "./Ourwork.css";
import astronaut from "../../../public/work.svg";
// import heartIcon from "../../../public/love.png";
// import thumbsUp from "../../../public/like.png";
// import messenger from "../../../public/comments.png";

const OurWork = () => {
  return (
    <div className="ourwork-container">
      <div className="text-section">
        <h1 className="ourwork-heading">
          OUR WORK
          {/* <img src={thumbsUp} alt="thumbs" className="emoji-icon left" />
          <img src={heartIcon} alt="heart" className="emoji-icon center" />
          <img src={messenger} alt="messenger" className="emoji-icon right" /> */}
        </h1>
        <p className="subheading">
          CREATIVE OUTCOMES FROM NONLINEAR THINKING AND DEEP COLLABORATION
        </p>
      </div>
      <div className="image-section">
        <img src={astronaut} alt="astronaut rocket" className="astronaut-img2" />
      </div>
    </div>
  );
};

export default OurWork;
