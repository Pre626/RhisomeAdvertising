import React from 'react';
import './work.css';

import work1 from "../../assets/work/work1.png";
import work2 from "../../assets/work/work2.png";
import work3 from "../../assets/work/work3.png";
import work4 from "../../assets/work/work4.png";
import work5 from "../../assets/work/work5.png";
import work6 from "../../assets/work/work6.png";
import work7 from "../../assets/work/work7.png";
import work8 from "../../assets/work/work8.png";
import work9 from "../../assets/work/work9.png";
import work11 from "../../assets/work/work11.png";
import work12 from "../../assets/work/work12.jpeg";
import work13 from "../../assets/work/work13.jpeg";
import work14 from "../../assets/work/work14.jpeg";
import work15 from "../../assets/work/work15.jpeg";
import work16 from "../../assets/work/work16.jpeg";
import work17 from "../../assets/work/work17.jpeg";
import work18 from "../../assets/work/work18.jpeg";
import work19 from "../../assets/work/work19.jpeg";
import work20 from "../../assets/work/work20.jpeg";
import work21 from "../../assets/work/work21.jpeg";
import work22 from "../../assets/work/work22.jpeg";
import work23 from "../../assets/work/work23.jpeg";
import work24 from "../../assets/work/work24.jpeg";
import work25 from "../../assets/work/work25.jpeg";
import work26 from "../../assets/work/work26.jpeg";

const works = [
    work1,work2,work3,work4,work5,work6,work7,work8,work9,work11,work12,work13,work14,work15,work16,work17,work18,work19,work20,work21,work22,work23,work24,work25,work26
];

function ProjectGallery() {
  return (
    <div className="gallery-container">
      <div className="header2">
        <button className="all-btn">ALL</button>
      </div>
      <div className="grid2">
        {works.map((src, index) => (
          <div className="card2" key={index}>
            <img src={src} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
