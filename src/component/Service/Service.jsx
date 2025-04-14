import React from "react";
import "./Service.css"; 
import { LiaCheckCircleSolid } from "react-icons/lia";

const services = [
  {
    title: "BRANDING",
    items: ["INDOOR & OUTDOOR", "BARNDING", "STYLE GUIDE", "COMPONY IDENTITY"],
  },
  {
    title: "DIGITAL MARKETING",
    items: [
      "SOCIAL MEDIA OPTIMISATION",
      "PPC",
      "GOOGLE, META ADS",
      "COMPONY IDENTITY",
    ],
  },
  {
    title: "PACKAGING",
    items: [
      "BRAND SHOOT",
      "PRODUCT SHOOT",
      "TV COMMERCIALS",
      "ART & DIRECTION",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    items: [
      "WEBSITE DEVELOPMENT",
      "WEB DESIGN",
      "MOBILE RESPONSIVE",
      "WEBSITE UI DESIGN"
    ],
  },
];

const OurServices = () => {
  return (
    <section className="services-section">
     <div className="services-left">
  <div className="title-with-astronaut">
    {/* Text */}
    <div className="services-heading">
      {/* <FaThumbsUp className="icon-like" /> */}
      <h2 className="services-title">OUR <br /> SERVICES</h2>
      {/* <FaHeart className="icon-heart" /> */}
    </div>

    {/* Astronaut Image */}
    <img src="/astronaut.png" alt="Astronaut" className="astronaut-image" />
  </div>

  <p className="services-desc">
    Bed sincerity yet therefore forfeited his certainty neglected questions.
    Pursuit chamber as elderly amongst on. Distant however warrant farther.
  </p>
</div>


      <div className="services-right">
        {services.map((service, index) => {
          const isSmallCard = service.title === "BRANDING" || service.title === "WEB DEVELOPMENT" || service.title === "DIGITAL MARKETING" || service.title==="PACKAGING";
          const isPackaging = service.title === "PACKAGING";

          const cardClass = `
            service-card 
            ${isSmallCard ? "small-card" : "large-card"} 
          `;

          return (
            <div key={index} className={cardClass.trim()}>
              <h3>{service.title}</h3>
              <ul className={isPackaging ? "packaging-list" : ""}>
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <LiaCheckCircleSolid className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
