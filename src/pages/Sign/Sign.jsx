import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Sign.css";
import social from "../../assets/social.jpg";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Sign = () => {
  const { signInHandler, loginToken, currentUser } = useContext(AuthContext);

  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
  });
  const handleLoginInputs = (e, name) => {
    setUserLoginDetails({ ...userLoginDetails, [name]: e.target.value });
    console.log(userLoginDetails);
  };

  const handleLogin = () => {
    if (userLoginDetails.username !== "" && userLoginDetails.password !== "") {
      signInHandler(userLoginDetails);
    } else {
      toast.error("Email & Password should not be empty", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleGuestLogin = () => {
    setUserLoginDetails({
      username: "manish@gmail.com",
      password: "manishgupta",
    });
    signInHandler({
      username: "manish@gmail.com",
      password: "manishgupta",
    });
  };
  console.log(currentUser);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                  Username
                </label>
                <input
                  className="login-input"
                  type="email"
                  name="username"
                  value={userLoginDetails.username}
                  onChange={(e) => handleLoginInputs(e, "username")}
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
                  value={userLoginDetails.password}
                  onChange={(e) => handleLoginInputs(e, "password")}
                />
              </div>
            </div>
            <div className="login-items">
              <button className="login-button" onClick={handleLogin}>
                Login In
              </button>
              <button className="login-button" onClick={handleGuestLogin}>
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
