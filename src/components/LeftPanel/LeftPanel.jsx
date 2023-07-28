import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftPanel.css";
import { AuthContext } from "../../context/AuthContext";
import AddPost from "../AddPost/AddPost";

const LeftPanel = () => {
  const { currentUser, loginToken } = useContext(AuthContext);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOutsideClick = () => {
    setDialogOpen(false);
  };
  const handleAddPost = () => {
    setDialogOpen(true);
  };
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
        <button className="btn-create-post" onClick={handleAddPost}>
          Create New Post
        </button>
        <div className="user-profile">
          <div className="user-img">
            <img className="user-img" src={currentUser.avatarUrl} alt="" />
          </div>
          <div className="user-details">
            <div className="user-name">
              {currentUser.firstName} {currentUser.lastName}
            </div>
            <div className="user-email">@{currentUser.username}</div>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <div
          className="addNewPostDiv"
          style={{
            position: "sticky",
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
              right: "25px",
              top: "6px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="addNewPostDiv">
              {" "}
              <AddPost />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
