import React from "react";
import { NavLink } from "react-router-dom";

import "./Sign.css";
import social from "../../assets/social.jpg";
const Sign = () => {
  return (
    <>
      <div className="main-login-container">
        <div className="social-img">
          <img src={social} alt="" className="social-img" />
        </div>
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h2>Sign In</h2>
            </div>
            <div className="login-items">
              <div className="input-container">
                <label htmlFor="input" className="input">
                  Email
                </label>
                <input
                  className="login-input"
                  type="email"
                  name="email"
                  // onChange={(e) => handleLoginInputs(e, "email")}
                />
              </div>
            </div>
            <div className="login-items">
              {" "}
              <div className="input-container">
                <label htmlFor="input" className="input">
                  Password
                </label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  // onChange={(e) => handleLoginInputs(e, "password")}
                />
              </div>
            </div>
            <div className="login-items">
              <button
                className="login-button"
                //  onClick={handleLogin}
              >
                Login In
              </button>
              <button
                className="login-button"
                //  onClick={handleGuestLogin}
              >
                Login as Guest
              </button>
              <div className="login-footer">
                <p>Don't have an account ? </p>
                <NavLink className="sign-link" to="/sign-up">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
