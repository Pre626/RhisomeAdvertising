import React from 'react';
import './Contact.css';
import { IoHome } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import GoogleMapComponent from '../GoogleMap/GoogleMapComponent';
import WorkingHours from "../Contactpage/Working";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <section className="contact-hero">
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h4 className="contact-subheading">WE WOULD LOVE TO WORK WITH YOU</h4>
          <h2 className="contact-heading">How we can help</h2>
          <p className="contact-text">
            You’re not going to hit a ridiculously long phone menu when you call us. Your email isn’t going to the inbox abyss, never to be seen or heard from again. At Choice Screening, we provide the exceptional service we’d want to experience ourselves!
          </p>

          <div className="contact-address">
            <span role="img" aria-label="location"><IoHome className='home-icon' /></span> Office No: 103, SHIVALIK, KOTHRUD,
            <br /> MAYUR COLONY, KOTHRUD, PUNE
            <br /><span role="img" aria-label="phone"><MdOutlinePhoneInTalk className='phone-icon'/></span> +91 8668806103
            <br /><span role="img" aria-label="email"><IoMdMail className='mail-icon'/></span>hellorhisome@gmail.com
        </div>
        <WorkingHours />
        </div>

        <div className="map-container">
          <GoogleMapComponent />
        </div>
      </section>
      
    </div>
  );
};

export default ContactUs;
