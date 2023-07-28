import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

const Profile = () => {
  const { currentUser, loginToken, logoutHandler } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);
  const loggedInUser = dataState.users.find(
    (user) => user.username === currentUser.username
  );
  return (
    <div>
      <div className="main-container">
        <div className="nav">
          <Navbar />
        </div>
        <div className="left-side">
          <LeftPanel />
        </div>
        <div className="content">
          <div className="profile-container">
            <div className="user-avatar">
              <img
                className="profile-img"
                src={loggedInUser?.avatarUrl}
                alt=""
              />
            </div>
            <div className="profile-info">
              <div className="profile-header">
                <div className="user-info">
                  <div className="user-detail">
                    <div className="loggedIn-details cursor">
                      <div className="user-name">
                        {loggedInUser?.firstName} {loggedInUser?.lastName}
                      </div>
                      <div className="user-id">@{loggedInUser?.username}</div>
                    </div>

                    <button className="edit">Edit Profile</button>
                    <button onClick={logoutHandler}>LogOut</button>
                  </div>
                </div>
              </div>
              <div className="user-bio">
                <div className="bio">{loggedInUser?.bio}</div>
                <div className="link">
                  {/* <span></span> */}
                  <a
                    href={loggedInUser?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {loggedInUser?.website}
                  </a>
                </div>
              </div>
              <div className="user-follower-following">
                <div className="follower gap ">
                  {" "}
                  <span className="num">{loggedInUser?.followers.length}</span>
                  <span>Follower</span>
                </div>
                <div className="following  gap">
                  {" "}
                  <span className="num">{loggedInUser?.following.length}</span>
                  <span>Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Profile;
