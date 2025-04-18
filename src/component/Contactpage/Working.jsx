import React from 'react';
import { FaClock } from 'react-icons/fa';
import './Working.css';

const WorkingHours = () => {
  return (
    <div className="working-hours-box">
      <h3>Working Hours</h3>
      <div className="hours">
        <FaClock className="clock-icon" />
        <span>Mon-Sat: 10AM to 6PM</span>
      </div>
    </div>
  );
};

export default WorkingHours;
