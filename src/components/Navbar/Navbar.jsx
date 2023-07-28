import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import icon from "../../assets/icon.png";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { logoutHandler, currentUser, loginToken } = useContext(AuthContext);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogOutsideClick = () => {
    setDialogOpen(false);
  };
  const handleLogout = () => {
    // logoutHandler();
  };
  const handleProfile = () => {};
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <NavLink to="/home" className="nav-left-content">
            <img src={icon} alt="" className="nav-img" />
            <h2 className="nav-header">beconnected</h2>
          </NavLink>
        </div>
        <div className="search-container">
          <input type="text" placeholder="search people" />
        </div>
        <div className="nav-right">
          <div className="login-btn" onClick={handleButtonClick}>
            <img
              className="user-icon avatar"
              src={currentUser?.avatarUrl}
              alt=""
            />
          </div>
          {isDialogOpen && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                // background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleDialogOutsideClick}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)",
                  maxWidth: "240px",
                  position: "absolute",
                  right: "72px",
                  top: "40px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li
                    onClick={() => logoutHandler()}
                    style={{ cursor: "pointer", marginBottom: "8px" }}
                  >
                    Logout
                  </li>
                  <NavLink
                    to={"/profile"}
                    style={{ cursor: "pointer", marginBottom: "8px" }}
                  >
                    Profile
                  </NavLink>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
