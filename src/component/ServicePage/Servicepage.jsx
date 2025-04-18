import React from "react";
import "./servicepage.css";
import astronaut2 from "../../../public/service.svg";
// import heartIcon from "../../../public/love.png";
// import thumbsUp from "../../../public/like.png";
// import messenger from "../../../public/comments.png";

const OurService = () => {
  return (
    <div className="service-container1">
      <div className="text-section">
        <h1 className="service-heading1">
          OUR SERVICES
          {/* <img src={thumbsUp} alt="thumbs" className="emoji-icon left" />
          <img src={heartIcon} alt="heart" className="emoji-icon center" />
          <img src={messenger} alt="messenger" className="emoji-icon right" /> */}
        </h1>
        <p className="subheading2">
        CREATIVE SERVICES THAT DRIVE CLARITY, CONNECTION AND CONVERSION
        </p>
      </div>
      <div className="image-section">
        <img src={astronaut2} alt="astronaut rocket" className="astronaut-img3" />
      </div>
    </div>
  );
};

export default OurService;