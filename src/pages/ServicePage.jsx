import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Servicepage from "../component/ServicePage/Servicepage";
import Serviceprovider from "../component/ServiceProvider/Serviceprovider";
import Footer from "../component/Footer/Footer";


function AboutPage() {
  const location = useLocation();
  const showLayout = location.pathname === "/servicepage";

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && <Servicepage />}
      {showLayout && <Serviceprovider />}
      {showLayout && <Footer />}
  
    </>
  );
}

export default AboutPage;
