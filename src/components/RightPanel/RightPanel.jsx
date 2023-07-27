import React, { useContext } from "react";
import "./RightPanel.css";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { followUserHandler } from "../../services/DataServices";

const RightPanel = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);

  const handleFollow = (_id, loginToken, dataDispatch) => {
    followUserHandler(_id, loginToken, dataDispatch);
  };

  const user = dataState?.users?.find(
    (user) => user?.username === currentUser?.username
  ); // to get updated current user info

  const followedUsers = user?.following.map((user) => user?.username); // loggedIn user following arr

  const suggestedUsers = dataState?.users?.filter(
    (user) =>
      user?.username !== currentUser?.username &&
      !followedUsers.includes(user?.username)
  );

  return (
    <>
      <div className="right-sidebar">
        <div className="buttons-rightside">
          <div className="flex-row-btn">
            <i class="fa-regular fa-fire"></i>
            <button>Trending</button>
          </div>
          <div className="flex-row-btn">
            <i class="fa-regular fa-eye"></i>
            <button>Latest</button>
          </div>
        </div>
        <h3>Suggestions for you</h3>
        {suggestedUsers?.map((user) => (
          <div className="sp-evn">
            <div className="user-profile flex-even">
              <div className="user-img">
                <img
                  className="user-img"
                  src={user?.avatarUrl}
                  alt={user?.firstName}
                />{" "}
              </div>
              <div className="user-details flex-even">
                <div className="user-name">
                  {user?.firstName}
                  {user?.lastName}
                </div>
                <div className="userId">@{user?.username}</div>
              </div>

              <button
                className="btn-follow"
                onClick={() =>
                  handleFollow(user?._id, loginToken, dataDispatch)
                }
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RightPanel;
