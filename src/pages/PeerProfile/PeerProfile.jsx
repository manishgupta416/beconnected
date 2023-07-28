import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import { useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./PeerProfile.css";
import SinglePost from "../../components/SinglePost/SinglePost";

const PeerProfile = () => {
  const { username } = useParams();
  const { dataState } = useContext(DataContext);
  const userDetails = dataState.users.find(
    (user) => user.username === username
  );

  const userPosts = dataState.posts.find((post) => post.username === username);
  return (
    <div>
      {" "}
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
                src={userDetails?.avatarUrl}
                alt=""
              />
            </div>
            <div className="profile-info">
              <div className="profile-header">
                <div className="user-info">
                  <div className="user-detail">
                    <div className="loggedIn-details cursor">
                      <div className="user-name">
                        {userDetails?.firstName} {userDetails?.lastName}
                      </div>
                      <div className="user-id">@{userDetails?.username}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-bio">
                <div className="bio">{userDetails?.bio}</div>
                <div className="link">
                  {/* <span></span> */}
                  <a
                    href={userDetails?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userDetails?.website}
                  </a>
                </div>
              </div>
              <div className="user-follower-following">
                <div className="follower gap ">
                  {" "}
                  <span className="num">{userDetails?.followers.length}</span>
                  <span>Follower</span>
                </div>
                <div className="following  gap">
                  {" "}
                  <span className="num">{userDetails?.following.length}</span>
                  <span>Following</span>
                </div>
              </div>
            </div>
          </div>
          <SinglePost post={userPosts} />
        </div>
        <div className="right-side">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default PeerProfile;
