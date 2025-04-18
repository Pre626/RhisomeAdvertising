import React from 'react';
import './Contact2.css';
import GoogleMapComponent from '../GoogleMap/GoogleMapComponent';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>HOW WE CAN HELP</h2>
        <p>
        You’re not going to hit a ridiculously long phone menu when you call us. Your email isn’t going to the inbox abyss, never to be seen or heard from again. At Choice Screening, we provide the exceptional service we’d want to experience ourselves!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send Massage</button>
        </form>
      </div>
      
      <div className="contact-right">
        <div className="contact-info">
          <p><i className="fas fa-map-marker-alt"></i> OFFICE NO: 103, SHIVALIK, KOTHRUD,<br/>MAYUR COLONY, KOTHRUD, PUNE</p>
          <p><i className="fas fa-phone"></i> +91 8668806103</p>
          <p><i className="fas fa-envelope"></i> hellorhisome@gmail.com</p>
        </div>
        <div className="map-container">
          <GoogleMapComponent />
        </div>

        <div className="contact-hours">
            <div className="hours-social-container">
            <p className="working-hours-box">
                <strong>WORKING HOURS</strong><br />
                <span className="working-hours-time">MON-SAT: 10AM TO 6PM</span>
            </p>
            <div className="social-icons">
      <i className="fab fa-instagram"></i>
      <i className="fab fa-linkedin"></i>
      <i className="fab fa-facebook"></i>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Contact;
