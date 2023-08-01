import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LeftPanel.css";
import { AuthContext } from "../../context/AuthContext";
import AddPost from "../AddPost/AddPost";
import { DataContext } from "../../context/DataContext";

const LeftPanel = () => {
  const { currentUser, loginToken } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);
  // const [isDialogOpen, setDialogOpen] = useState(false);

  // const handleDialogOutsideClick = () => {
  //   setDialogOpen(false);
  // };
  // const handleAddPost = () => {
  //   setDialogOpen(true);
  // };
  const navigate = useNavigate();

  const [showEditPopup, setShowEditPopup] = useState(false);
  const handleAddPost = () => {
    setShowEditPopup(true);
  };
  const loggedInUser = dataState?.users?.find(
    (user) => user?.username === currentUser?.username
  );
  return (
    <div>
      <div className="sidebar1">
        <div className="side-links">
          <NavLink className="flex-row" to={"/home"}>
            <i class="fa-sharp fa-light fa-house-user"></i>
            <div className="home">Home</div>
          </NavLink>

          <NavLink className="flex-row" to={"/bookmarks"}>
            <i class="fa-regular fa-bookmark" style={{ color: "#1b74e4" }}></i>
            <div className="bookmark">Bookmark</div>
          </NavLink>

          <NavLink className="flex-row" to={"/explore"}>
            <i class="fa-regular fa-compass" style={{ color: "#1b74e4" }}></i>{" "}
            <div className="explore">Explore</div>
          </NavLink>

          <NavLink className="flex-row" to={"/profile"}>
            <i class="fa-regular fa-user" style={{ color: "#1b74e4" }}></i>
            <div className="profile">Profile</div>
          </NavLink>
        </div>
        <button className="btn-create-post btn-fb" onClick={handleAddPost}>
          Create New Post
        </button>
        <NavLink className="user-profile" to={"/profile"}>
          {loggedInUser ? (
            <div className="user-img">
              <img className="user-img" src={loggedInUser?.avatarUrl} alt="" />
            </div>
          ) : (
            <div className="user-img">
              <img className="user-img" src={currentUser?.avatarUrl} alt="" />
            </div>
          )}
          {loggedInUser ? (
            <div className="user-details">
              <div className="user-name">
                {loggedInUser?.firstName} {loggedInUser?.lastName}
              </div>
              <div className="user-email">@{loggedInUser?.username}</div>
            </div>
          ) : (
            <div className="user-details">
              <div className="user-name">
                {currentUser?.firstName} {currentUser?.lastName}
              </div>
              <div className="user-email">@{currentUser?.username}</div>
            </div>
          )}
        </NavLink>
      </div>
      {showEditPopup && <AddPost onClose={() => setShowEditPopup(false)} />}
    </div>
  );
};

export default LeftPanel;
