import React from "react";
import "./Why.css";

const Why = [
  {
    title: "Comprehensive Services",
    description:
      "Offering Wide range of services,including digital advertising,social media management, and content creation, Rhisome provides a one-stop solution for all your marketing needs.",
  },
  {
    title: "Local Expertise",
    description:
      "From concept development to final production, Rhisome provides end-to-end service, making the process seamless for clients.",
  },
  {
    title: "Thoughtfully Designed",
    description:
      "Every product is created with intention,blending aesthetics,functionality, and respect for the environment.",
  },
  {
    title: "People First",
    description:
      "From our team to our customers and collaborators,we nurture relationships that grow with integrity and care.",
  },
  {
    title: "Proven Success",
    description:
      "With a track record of driving measurable results,Rhisome has generated positive reviews for enhancing brand visibility and engagement.",
  },

  {
    title: "Rooted in Purpose",
    description:
      "we’re more than just a brand — we’re a movement towards mindful living, sustainability, and community connection.",
  },
];

const Whychoose = () => {
  return (
    <section className="services-section-why">
      <div className="services-left">
        <div className="title-with-astronaut">
          <div className="services-heading">
            <h2 className="services-title1">Why choose</h2>
            <h2 className="rhisome-head">Rhisome</h2>
          </div>
          <img src="/whychoose.svg" alt="whychoose" className="whychoose-image" />
        </div>
        {/*  Rooted in Purpose Card */}
    <div className="rooted-card">
      <h3>Rooted in Purpose</h3>
      <p className="service-top-paragraph">
        We’re more than just a brand — we’re a movement towards mindful living, sustainability, and community connection.
      </p>
    </div>
  </div>

      <div className="services-right">
        {/* Left column */}
        <div className="left-column">
          {Why.map((service, index) => {
            if (index === 0 || index === 2) {
              const isSmallCard =
                service.title === "Comprehensive Services" ||
                service.title === "Thoughtfully Designed" || service.title ==="";
              const cardClass = `why-card ${isSmallCard ? "small-card" : "extrasmall-card"}`;
              return (
                <div key={index} className={cardClass}>
                  <h3>{service.title}</h3>
                  <p className="service-top-paragraph">{service.description}</p>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Right column */}
        <div className="right-column">
          {Why.map((service, index) => {
            if (index === 1 || index === 3 || index === 4) {
              const isSmallCard =
                service.title === "Comprehensive Services" ||
                service.title === "Thoughtfully Designed" || service.title==="Rooted in purpose";
              const cardClass = `why-card ${isSmallCard ? "small-card" : "extrasmall-card"} right-card`;
              return (
                <div key={index} className={cardClass}>
                  <h3>{service.title}</h3>
                  <p className="service-top-paragraph">{service.description}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
