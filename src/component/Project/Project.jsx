// ProjectsSection.jsx
import React from 'react';
import './Project.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-left">
        <h2 className="vertical-heading">PROJECTS</h2>
        <img src="/like2.png" alt="thumb" className="icon icon-thumb" />
        <img src="/love.png" alt="heart" className="icon icon-heart" />
        <img src="/comment2.png" alt="comment" className="icon icon-comment" />
      </div>
      <div className="projects-gallery">
        <div className="gallery-item">
          <img src="/projectimg1.png" alt="project" />
        </div>
        <div className="gallery-item">
          <img src="/projectimg3.png" alt="project" />
        </div>
        <div className="gallery-item">
          <img src="/projectimg2.png" alt="project" />
        </div>
        <div className="gallery-item2">
          <img src="/projectimg4.png" alt="project" />
        </div>
      </div>
      <div className="projects-right">
        <h3>FIND BEAUTY <br />ALL OVER THE <br /> WORLD <br /> </h3>
        <p>
        Take a scroll through our portfolio and feel the heart, hustle, and creativity we put into every brand we touch.
        </p>
        
        <button className="see-more">SEE MORE ➤</button>
        <img src="/robot.svg" alt="astronaut" className="astro-img" />
      </div>
    </section>
  );
};

export default ProjectsSection;
