import React from "react";

function TopBar() {
  return (
    <div id="top-bar">
      <div className="top-bar-left">
        <div className="logo-div">
          <img src="/images/logo.png" alt="" />
        </div>
        <h3>E-tutor</h3>
        <select name="" id="">
          <option value="browse">Browse</option>
        </select>
        <input type="text" placeholder="What do you want learn..." />
      </div>

      <div className="top-bar-right">
        <span></span>
        <span></span>
        <span></span>
        <button>Create Account</button>
        <button className="btn-primary">Sign In</button>
      </div>
    </div>
  );
}

export default TopBar;
