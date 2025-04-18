import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import OurWork from "../component/Ourwork/Ourwork";
import Work from "../component/work/Work";
import Footer from "../component/Footer/Footer";


function AboutPage() {
  const location = useLocation();
  const showLayout = location.pathname === "/ourwork";

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && <OurWork />}
      {showLayout && <Work />}
      {showLayout && <Footer />}
  
    </>
  );
}

export default AboutPage;
