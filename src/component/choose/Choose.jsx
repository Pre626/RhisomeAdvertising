import React, { useState } from 'react';
import './Choose.css';
import Choose1 from "../../assets/choose1.png";

const features = [
  "Comprehensive Services",
  "Local Expertise",
  "Proven Success",
  "Rooted  In Purpose",
  "Thoughtfully Designed",
  "People First",
];

const featureDetails = {
  "Comprehensive Services": {
    title: "Comprehensive Services",
    description: "Offering a wide range of services, including digital advertising, social media management, and content creation, Rhisome provides a one-stop solution for all your marketing needs.",
    // icon: Choose1,
  },
  "Local Expertise": {
    title: "Local Expertise",
    description: "From concept development to final production, Rhisome provides end-to-end services, making the process seamless for clients."
  },
  "Proven Success" :{
    title: "Proven Success",
    description: "With a track record of driving measurable results, Rhisome has garnered positive reviews for enhancing brand visibility and engagement."
  },
  "Rooted  In Purpose": {
    title: "Rooted  In Purpose",
    description: "We’re more than just a brand — we’re a movement towards mindful living, sustainability, and community connection."
  },
  "Thoughtfully Designed" :{
    title: "Thoughtfully Designed",
    description: "Every product is created with intention, blending aesthetics, functionality, and respect for the environment."
  },
  "People First" :{
    title: "People First",
    description: "From our team to our customers and collaborators, we nurture relationships that grow with integrity and care."
  }
};

const Choose = () => {
  // ✅ Fix: Set default to a valid key (with icon)
  const [selected, setSelected] = useState("Comprehensive Services");

  return (
    <div className="why-choose1">
      <div className="left-panel">
        <h1 className="heading1">WHY CHOOSE US</h1>
        <ul className="feature-list">
          {features.map((item) => (
            <li
              key={item}
              className={selected === item ? 'active' : ''}
              onClick={() => setSelected(item)}
            >
              {item}
              {selected === item && <span className="arrow2">→</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="right-card1">
  {featureDetails[selected]?.icon && (
    <div className="icon1">
      <img
        src={featureDetails[selected].icon}
        alt="Feature Icon"
        className="feature-icon"
      />
    </div>
  )}
  <h2 className="card-title">{featureDetails[selected]?.title}</h2>
  <p className="card-description">{featureDetails[selected]?.description}</p>
</div>
    </div>
  );
};

export default Choose;
