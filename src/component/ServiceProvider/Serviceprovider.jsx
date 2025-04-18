import React from "react";
import "./servicesprovider.css";
import brandingImg from '../../assets/logos/branding.jpeg';
import digital from '../../assets/logos/digital.jpeg';
import webdev from '../../assets/logos/webdevlop.jpg';
import design from '../../assets/logos/design.jpeg';

const services = [
  {
    title: "Branding",
    description:
      "Branding is the strategic process of creating a unique identity and cohesive image for a business or product in the minds of consumers.",
    image:brandingImg
  },
  {
    title: "Digital Media Marketing",
    description:
      "Digital Media Marketing is the strategic use of digital platforms to promote products, services, or brands.",
    image: digital,
  },
  {
    title: "Website Development",
    description:
      "Website development involves creating and maintaining websites, focusing on both the front-end (client side) and back-end (server side) aspects.",
    image: webdev,
  },
  {
    title: "Design and Packaging",
    description:
      "Design and Packaging is the art of visually defining a product's essence while ensuring it's both functional and eye-catching.",
    image: design,
  },
];

const ServicesGrid = () => {
  return (
    <div className="services-grid1 ">
      {services.map((service, index) => (
        <div className="service1" key={index}>
          <img src={service.image} alt={service.title} className="service-image1" />
          <div className="service-content1">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="/servicepage" className="see-details1">See Details &rarr;</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
