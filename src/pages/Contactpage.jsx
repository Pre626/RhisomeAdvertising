import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import ContactUs from "../component/Contactpage/Contact";
import Footer from "../component/Footer/Footer";
import Contact2 from "../component/Contactpage/Contact2";



function AboutPage() {
  const location = useLocation();
  const showLayout = location.pathname === "/contactpage";

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && <ContactUs />}
      {showLayout && <Contact2 />}
      {showLayout && <Footer />}
  
    </>
  );
}

export default AboutPage;
