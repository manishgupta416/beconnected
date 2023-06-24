import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SignUp.css";
import social2 from "../../assets/social2.jpg";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const { signUpHandler } = useContext(AuthContext);

  const [userSignupDetails, setUserSignupDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleSignUpInputs = (e, name) => {
    setUserSignupDetails({ ...userSignupDetails, [name]: e.target.value });
    // console.log(userSignupDetails);
  };

  const handleSignUp = () => {
    if (
      (userSignupDetails.firstName !== "" && userSignupDetails.lastName !== "",
      userSignupDetails.username !== "",
      userSignupDetails.password !== "")
    ) {
      signUpHandler(userSignupDetails);
    } else {
      //   alert("all input field should not be empty and password should match ");
      toast.error(
        "All input fields should not be empty and both password should match",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
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
                  onChange={(e) => handleSignUpInputs(e, "firstName")}
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
                  onChange={(e) => handleSignUpInputs(e, "lastName")}
                />
              </div>
            </div>
            <div className="signup-items">
              <div className="signup-input-container">
                <label htmlFor="">Username</label>
                <input
                  className="signup-inputs"
                  type="email"
                  name="username"
                  onChange={(e) => handleSignUpInputs(e, "username")}
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
                  onChange={(e) => handleSignUpInputs(e, "password")}
                />
              </div>
            </div>

            <div className="signup-items">
              <div className="signup-input-container">
                <button className="signup-btn" onClick={handleSignUp}>
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
