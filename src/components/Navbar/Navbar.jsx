import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import icon from "../../assets/icon.png";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <NavLink to="/" className="nav-left-content">
            <img src={icon} alt="" className="nav-img" />
            <h2 className="nav-header">beconnected</h2>
          </NavLink>
        </div>
        <div className="search-container">
          <input type="text" placeholder="search people" />
        </div>
        <div className="nav-right">
          <NavLink to="/sign-in" className="login-btn">
            <i class="fa-solid fa-user fa-2x" style={{ color: "#1b74e4" }}></i>
            <span className="user-icon"></span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
