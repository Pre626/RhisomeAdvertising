import React from "react";
import "./TeamSection.css";

const teamMembers = [
  { name: "MAYUR PATIL", role: "GRAPHIC DESIGNER", img: "/mayur.jpeg" },
  { name: "RUSHI SATHE", role: "GRAPHIC DESIGNER", img: "/rushi.jpeg" },
  { name: "MANALI ATRE", role: "SR. DIGITAL MARKETING MANAGER", img: "/manali.jpeg" },
  { name: "MADHURA RAJOPADHYE", role: "WEB DEVELOPER", img: "/madhura.jpeg" },
  { name: "SWAPNIL PATIL", role: "MOTION GRAPHICS DESIGNER", img: "/swapnil.jpeg" },
  { name: "SHRIYASH KUDALE", role: "SOCIAL MEDIA STRATEGIST", img: "/sriyash.jpeg" },
  { name: "RAHUL KETHAVAT", role: "VIDEO EDITOR", img: "/rahul.jpeg" }
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* Left Column */}
        <div className="services-left1">
          <div className="title-with-astronaut">
            <div className="services-heading">
              <h2 className="team-title">OUR <br /> TEAM</h2>
            </div>
            <img src="/Teamimg.svg" alt="Team" className="team-image" />
          </div>
        </div>

        {/* Right Column */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="member-img" />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
