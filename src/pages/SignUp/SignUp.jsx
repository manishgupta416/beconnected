import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./SignUp.css";
import social2 from "../../assets/social2.jpg";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const { item } = useContext(AuthContext);
  return (
    <div className="main">
      <div className="main-login-container">
        <div className="social-img">
          <img src={social2} alt="" className="social-img bright signup-img" />
        </div>
        <div className="signup-container">
          <div className="signup-card">
            <div className="signup-header">
              <h2>Sign Up </h2>
            </div>
            <div className="signup-items">
              <div className="signup-input-container">
                <label htmlFor="">First Name</label>
                <input
                  className="signup-inputs"
                  type="text"
                  name="firstName"
                  //   onChange={(e) => handleSignUpInputs(e, "firstName")}
                />
              </div>
            </div>
            <div className="signup-items">
              <div className="signup-input-container">
                <label htmlFor="">Last Name</label>
                <input
                  className="signup-inputs"
                  type="text"
                  name="lastName"
                  //   onChange={(e) => handleSignUpInputs(e, "lastName")}
                />
              </div>
            </div>
            <div className="signup-items">
              <div className="signup-input-container">
                <label htmlFor="">Email</label>
                <input
                  className="signup-inputs"
                  type="email"
                  name="email"
                  //   onChange={(e) => handleSignUpInputs(e, "email")}
                />
              </div>
            </div>

            <div className="signup-items">
              <div className="signup-input-container">
                <label htmlFor="">Password</label>
                <input
                  className="signup-inputs"
                  type="password"
                  name="password"
                  //   onChange={(e) => handleSignUpInputs(e, "password")}
                />
              </div>
            </div>

            <div className="signup-items">
              <div className="signup-input-container">
                <button
                  className="signup-btn"
                  //  onClick={handleSignUp}
                >
                  Create new account
                </button>
                <div className="signup-footer">
                  <p>Already have an account? </p>
                  <div className="signin">
                    <NavLink className="sign-in" to="/sign-in">
                      Sign In
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
