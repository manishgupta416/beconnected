import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./PeerProfile.css";
import SinglePost from "../../components/SinglePost/SinglePost";
import {
  followUserHandler,
  unfollowUserHandler,
} from "../../services/DataServices";
import { AuthContext } from "../../context/AuthContext";

const PeerProfile = () => {
  const { username } = useParams();
  const { dataState, dataDispatch } = useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);
  const loggedInUser = dataState.users.find(
    (user) => user.username === currentUser.username
  );
  console.log(loggedInUser, "peerprofile");
  const userDetails = dataState.users.find(
    (user) => user.username === username
  );

  const userPosts = dataState.posts.filter(
    (post) => post.username === username
  );
  const isFollowed = loggedInUser.following.some(
    (user) => user.username === username
  );
  const handleUnfollow = (_id, loginToken, dataDispatch) => {
    unfollowUserHandler(_id, loginToken, dataDispatch);
  };
  const handleFollow = (_id, loginToken, dataDispatch) => {
    followUserHandler(_id, loginToken, dataDispatch);
  };
  console.log(userDetails, "peerusrnm");
  const [isShowListPopup, setShowListPopup] = useState(false);
  const [isShowFollowingListPopup, setShowFollowingListPopup] = useState(false);
  const showFollowerList = () => {
    setShowListPopup(true);
  };

  const handleClosePopuo = () => {
    setShowListPopup(false);
    setShowFollowingListPopup(false);
  };

  const navigate = useNavigate();
  const navigateToProfile = (username) => {
    navigate(`/profile/${username}`);
    setShowListPopup(false);
    setShowFollowingListPopup(false);
  };

  const showFollowingList = () => {
    setShowFollowingListPopup(true);
  };

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
                    {loggedInUser.username !== userDetails.username && (
                      <div>
                        {isFollowed ? (
                          <button
                            onClick={() =>
                              handleUnfollow(
                                userDetails?._id,
                                loginToken,
                                dataDispatch
                              )
                            }
                          >
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleFollow(
                                userDetails?._id,
                                loginToken,
                                dataDispatch
                              )
                            }
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    )}
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
                  <span onClick={showFollowerList} className="cursor">
                    Follower
                  </span>
                </div>
                <div className="following  gap ps-rel">
                  {" "}
                  <span className="num">{userDetails?.following.length}</span>
                  <span className="cursor " onClick={showFollowingList}>
                    Following
                  </span>
                </div>{" "}
                {isShowListPopup && (
                  <div className="add-container popup-background flex">
                    <div className="avatar flx-space rm-br">
                      {/* <img
                        className="avatar rm-br"
                        src={userDetails.avatarUrl}
                        alt=""
                      /> */}
                      <button onClick={handleClosePopuo}>X</button>
                    </div>

                    <div className="add-content popup-content">
                      {userDetails?.followers.map((user) => (
                        <div className="flex-rw border-bottom">
                          <img
                            className="avatar rm-br cursor"
                            src={user.avatarUrl}
                            alt=""
                            onClick={() => navigateToProfile(user?.username)}
                          />
                          <div className="flex-col">
                            <div className="name">
                              <span> {user?.firstName}</span>
                              <span> {user?.firstName}</span>
                            </div>
                            <div className="usrnm">
                              <div> {user?.username}</div>
                            </div>
                          </div>{" "}
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                )}
                {/* showing following list */}
                {isShowFollowingListPopup && (
                  <div className="add-container popup-background flex">
                    <div className="avatar flx-space rm-br">
                      {/* <img
                        className="avatar rm-br"
                        src={userDetails.avatarUrl}
                        alt=""
                      /> */}
                      <button onClick={handleClosePopuo}>X</button>
                    </div>

                    <div className="add-content popup-content">
                      {userDetails?.following.map((user) => (
                        <div className="flex-rw border-bottom">
                          <img
                            className="avatar rm-br cursor"
                            src={user.avatarUrl}
                            alt=""
                            onClick={() => navigateToProfile(user?.username)}
                          />
                          <div className="flex-col">
                            <div className="name">
                              <span> {user?.firstName}</span>
                              <span> {user?.firstName}</span>
                            </div>
                            <div className="usrnm">
                              <div> {user?.username}</div>
                            </div>
                          </div>{" "}
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {userPosts.map((post) => (
            <SinglePost post={post} />
          ))}
        </div>
        <div className="right-side">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default PeerProfile;
