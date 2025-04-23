import React, { useState } from 'react';
import './Project.css';

const ProjectsSection = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleImageClick = (index) => {
    setZoomedIndex(prev => (prev === index ? null : index));
  };

  const images = [
    "/projectimg1.png", //index 0
    "/projectimg3.png", //index 1
    "/projectimg2.png", //index 2
    "/projectimg4.png", //index 3
  ];

  return (
    <section className="projects-section">
      <div className="projects-left">
        <h2 className="vertical-heading">PROJECTS</h2>
        <img src="/like2.png" alt="thumb" className="icon icon-thumb" />
        <img src="/love.png" alt="heart" className="icon icon-heart" />
        <img src="/comment2.png" alt="comment" className="icon icon-comment" />
      </div>

      <div className="projects-gallery">
        {images.map((src, index) => {
          const isZoomed = zoomedIndex === index;

          // Updated shrink condition logic
          const shouldShrink =
            (zoomedIndex === 0 && index === 2) ||
            (zoomedIndex === 1 && index === 3);

          return (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={src}
                alt={`project-${index}`}
                className={
                  isZoomed
                    ? 'zoomed-vertical'
                    : shouldShrink
                    ? 'shrink'
                    : ''
                }
              />
            </div>
          );
        })}
      </div>

      <div className="projects-right">
        <h3>FIND BEAUTY <br />ALL OVER THE <br /> WORLD <br /></h3>
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
