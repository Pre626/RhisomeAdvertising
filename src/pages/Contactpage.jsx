import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import ContactUs from "../component/Contactpage/Contact";
import Footer from "../component/Footer/Footer";



function AboutPage() {
  const location = useLocation();
  const showLayout = location.pathname === "/contactpage";

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && <ContactUs />}
      {showLayout && <Footer />}
  
    </>
  );
}

export default AboutPage;
