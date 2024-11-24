import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-left">
        Start learning with 67.1k students around the world.
        <div className="footer-left-buttons">
        <button className="btn-primary">Join The Family</button>
        <button>Browse All Courses</button>
        </div>
        
      </div>

      <div className="footer-right">
        <div>
          <p>6.3k</p>
          <p>Online Courses</p>
        </div>
        <div>
          <p>26k</p>
          <p>Certified Instructor</p>
        </div>
        <div>
          <p>99.9%</p>
          <p>Success Rate</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
