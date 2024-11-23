import React from "react";

function TopBar() {
  return (
    <div id="top-bar">
      <div className="top-bar-left">
        <div className="logo-div">
          <img src="/images/logo.png" alt="" />
        </div>
        <h5>E-tutor</h5>
        <select name="" id="">
          <option value="browse">Browse</option>
        </select>
        <input type="text" placeholder="What do you want learn" />
      </div>

      <div className="top-bar-right">
        <span></span>
        <span></span>
        <span></span>
        <button>Craete Account</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default TopBar;
