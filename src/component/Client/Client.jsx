import React from "react";
import "./Clients.css";

// Import your images manually
import logo1 from "../../assets/logos/client1.png";
import logo2 from "../../assets/logos/client2.png";
import logo3 from "../../assets/logos/client3.png";
import logo4 from "../../assets/logos/client4.png";
import logo5 from "../../assets/logos/client5.png";
import logo6 from "../../assets/logos/client6.png";
import logo7 from "../../assets/logos/client7.png";
import logo8 from "../../assets/logos/client8.png";
import logo9 from "../../assets/logos/client9.png";
import logo10 from "../../assets/logos/client10.png";
import logo11 from "../../assets/logos/client11.png";
import logo12 from "../../assets/logos/client12.png";
import logo13 from "../../assets/logos/client13.png";
import logo14 from "../../assets/logos/client14.png";
import logo15 from "../../assets/logos/client15.png";
import logo16 from "../../assets/logos/client16.png";
import logo17 from "../../assets/logos/client17.png";
import logo18 from "../../assets/logos/client18.png";
import logo19 from "../../assets/logos/client19.png";
import logo20 from "../../assets/logos/client20.png";
import logo21 from "../../assets/logos/client21.png";
import logo22 from "../../assets/logos/client22.png";
import logo23 from "../../assets/logos/client23.png";
import logo24 from "../../assets/logos/client24.png";
import logo25 from "../../assets/logos/client25.png";




const clients = [
  logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25
];

const ClientsGrid = () => {
  return (
    <div className="clients-section">
      <h2 className="title">Our Client</h2>
      <div className="clients-grid">
        {clients.map((logo, index) => (
          <div key={index} className="client-card">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsGrid;
