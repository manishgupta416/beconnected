import React, { useContext } from "react";
import "./RightPanel.css";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { followUserHandler } from "../../services/DataServices";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
const RightPanel = ({ homeposts }) => {
  const { dataState, dataDispatch, sortBtnText, setSortBtnText } =
    useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);

  const handleFollow = (_id, loginToken, dataDispatch, username) => {
    followUserHandler(_id, loginToken, dataDispatch);
    toast.success(`You are now following ${username}`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
  const navigate = useNavigate();
  const navigateToProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  return (
    <>
      <div className="right-sidebar">
        {homeposts && (
          <div className="buttons-rightside">
            <div className="flex-row-btn col-w">
              <i
                class="fa-solid fa-fire fa-xl "
                style={{ color: "#205dc5" }}
              ></i>
              <button
                className="sort-btn btn-fb"
                value={"Trending"}
                onClick={(e) => setSortBtnText(e.target.value)}
              >
                Trending
              </button>
            </div>
            <div className="flex-row-btn col-w">
              <i
                class="fa-regular fa-eye fa-xl"
                style={{ color: "#205dc5" }}
              ></i>
              <button
                className="sort-btn btn-fb"
                value={"Latest"}
                onClick={(e) => setSortBtnText(e.target.value)}
              >
                Latest
              </button>
            </div>
          </div>
        )}
        <h3>Suggestions for you</h3>
        {suggestedUsers?.map((user) => (
          <div className="sp-evn">
            <div className="user-profile flex-even">
              <div
                className="user-img"
                onClick={() => navigateToProfile(user?.username)}
              >
                <img
                  className="user-img"
                  src={user?.avatarUrl}
                  alt={user?.firstName}
                />{" "}
              </div>
              <div
                className="user-details flex-even"
                onClick={() => navigateToProfile(user?.username)}
              >
                <div className="user-name">
                  {user?.firstName}
                  {user?.lastName}
                </div>
                <div className="userId">@{user?.username}</div>
              </div>

              <button
                className="btn-follow btn-fb"
                onClick={() =>
                  handleFollow(
                    user?._id,
                    loginToken,
                    dataDispatch,
                    user?.username
                  )
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
