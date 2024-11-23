import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <span>Home</span>
        <span>Courses</span>
        <span>About</span>
        <span>Contact</span>
        <span>Become an Instructor</span>
      </div>

      <div className="nav-right">
        <span>USD</span>
        <span>English</span>
      </div>
    </nav>
  );
}

export default Navbar;
