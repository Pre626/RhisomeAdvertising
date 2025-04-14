import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Agency from "../component/agency/Agency";
import Project from "../component/Project/Project";
import Service from "../component/Service/Service";
import Why from "../component/whychoose/Why";
import About from "../component/Aboutus/About";

import './Homepage.css'; 
function Homepage() {
  return (
    <div>
      <Navbar />
      <Agency /> 
      <Project />
      <Service />
      <Why />
      <About />
      </div>
    
  );
}

export default Homepage;