import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";
import favicon from "../../assets/favicon.ico";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../../context/DataContext";
const Navbar = () => {
  const { logoutHandler, currentUser, loginToken } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };
  const showUserList = () => {
    setShowUserPopup(true);
  };

  const handleDialogOutsideClick = () => {
    setDialogOpen(false);
    setShowUserPopup(false);
  };

  const [input, setInput] = useState("");
  const handleClose = () => {
    setShowUserPopup(false);
  };
  const inputSearch =
    input.length > 0
      ? dataState.users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(input) ||
            user.lastName.toLowerCase().includes(input) ||
            user.username.toLowerCase().includes(input)
        )
      : ["Not Found"];
  console.log(inputSearch);

  const navigate = useNavigate();

  const navigateToProfile = (username) => {
    navigate(`/profile/${username}`);
    setShowUserPopup(false);
  };

  const loggedInUser = dataState.users.find(
    (user) => user.username === currentUser.username
  ); //to get current updated all details
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <NavLink to="/home" className="nav-left-content">
            <img src={favicon} alt="" className="nav-img" />
            <h2 className="nav-header">beconnected</h2>
          </NavLink>
        </div>
        <div className="search-container ">
          <input
            type="text"
            placeholder="Search user"
            readOnly
            onClick={inputSearch.length !== 0 && showUserList}
          />
        </div>
        {showUserPopup && (
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
              className="user-popup srch-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={handleClose} className="btn-fb cursor">
                X
              </button>
              <div className="search-user ">
                <input
                  type="text"
                  placeholder="Search user"
                  onChange={(e) => setInput(e.target.value.toLowerCase())}
                  onClick={inputSearch.length !== 0 && showUserList}
                />
              </div>

              <ul style={{ listStyleType: "none", padding: 0 }}>
                {inputSearch?.map((user) => (
                  <div className="flex-rw border-bottom margin-btm">
                    {user?.avatarUrl && (
                      <img
                        className="avatar rm-br cursor"
                        src={user?.avatarUrl}
                        alt=""
                        onClick={() => navigateToProfile(user?.username)}
                      />
                    )}
                    <div className="flex-col">
                      <div className="name">
                        <span> {user?.firstName}</span>
                        <span> {user?.firstName}</span>
                      </div>
                      <div className="usrnm">
                        <div> {user?.username}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {inputSearch.length === 0 && "No user found"}
              </ul>
            </div>
          </div>
        )}
        <div className="nav-right">
          <div className="login-btn" onClick={handleButtonClick}>
            <img
              className="user-icon avatar"
              src={loggedInUser?.avatarUrl}
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
