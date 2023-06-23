import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftPanel.css";

const LeftPanel = () => {
  return (
    <div>
      <div className="sidebar1">
        <div className="side-links">
          <NavLink className="flex-row">
            <i class="fa-sharp fa-light fa-house-user"></i>
            <div className="home">Home</div>
          </NavLink>

          <NavLink className="flex-row">
            <i class="fa-regular fa-bookmark" style={{ color: "#1b74e4" }}></i>
            <div className="bookmark">Bookmark</div>
          </NavLink>

          <NavLink className="flex-row">
            <i class="fa-regular fa-compass" style={{ color: "#1b74e4" }}></i>{" "}
            <div className="explore">Explore</div>
          </NavLink>

          <NavLink className="flex-row">
            <i class="fa-regular fa-user" style={{ color: "#1b74e4" }}></i>
            <div className="profile">Profile</div>
          </NavLink>
        </div>
        <button className="btn-create-post">Create New Post</button>
        <div className="user-profile">
          <div className="user-img"></div>
          <div className="user-details">
            <div className="user-name">Manish</div>
            <div className="user-email">manish.info2020@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
