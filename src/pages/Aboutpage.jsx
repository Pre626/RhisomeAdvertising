import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import About2 from "../component/AboutPage/About2";
import Founder from "../component/Founder/Founder";
import Footer from "../component/Footer/Footer";
import Choose from "../component/choose/Choose";


function AboutPage() {
  const location = useLocation();
  const showLayout = location.pathname === "/aboutpage";

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && <About2 />}
      {showLayout && <Founder />}
      {showLayout && <Choose />}
      {showLayout && <Footer />}
  
    </>
  );
}

export default AboutPage;
