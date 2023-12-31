import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { v4 as uuid } from "uuid";
import { editUserHandler } from "../../services/DataServices";
import SinglePost from "../../components/SinglePost/SinglePost";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
const Profile = () => {
  const { currentUser, loginToken, logoutHandler } = useContext(AuthContext);
  const { dataState, dataDispatch } = useContext(DataContext);
  const loggedInUser = dataState.users.find(
    (user) => user.username === currentUser.username
  );

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
    setShowEditPopup(true);
    setUserDetails({ ...loggedInUser });
  };

  const handleClose = () => {
    setDialogOpen(false);
    setShowEditPopup(false);
  };
  const handleUpdateProfile = () => {
    console.log(userDetails);
    editUserHandler(userDetails, loginToken, dataDispatch);
    setDialogOpen(false);
    setShowEditPopup(false);
    toast.success("Profile Updated Successfully!!", {
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

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    bio: "",
    avatarUrl: "",
    website: "",
  });

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    setUserDetails({ ...userDetails, avatarUrl: URL.createObjectURL(file) });
  };
  const uploadAvatarHandler = (avatar) => {
    setUserDetails({ ...userDetails, avatarUrl: avatar });
  };

  const loggedInUserPosts = dataState.posts.filter(
    (post) => post.username === loggedInUser.username
  );

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [isShowListPopup, setShowListPopup] = useState(false);
  const showFollowingList = () => {
    setShowListPopup(true);
  };

  const handleClosePopuo = () => {
    setShowListPopup(false);
    setShowFollowerListPopup(false);
  };

  const navigate = useNavigate();
  const navigateToProfile = (username) => {
    navigate(`/profile/${username}`);
    setShowFollowerListPopup(false);
  };

  const [isShowFollowerListPopup, setShowFollowerListPopup] = useState(false);

  const showFollowerList = () => {
    setShowFollowerListPopup(true);
  };

  const avatars = [
    "https://cdn-icons-png.flaticon.com/128/4140/4140047.png",
    "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
    "https://cdn-icons-png.flaticon.com/128/236/236832.png",
    "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    "https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
    "https://cdn-icons-png.flaticon.com/128/1154/1154448.png",
    "https://cdn-icons-png.flaticon.com/128/2922/2922561.png",
    "https://cdn-icons-png.flaticon.com/128/4140/4140051.png",
  ];

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
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
            {showEditPopup && (
              <div className="popup-background flex flex-sp">
                <div className="edit-container popup-content wdth scroll">
                  <div className="edit-nav">
                    <button className="btn-fb" onClick={handleClose}>
                      X
                    </button>
                    <strong className="txt">Edit Profile</strong>
                    <button className="btn-fb" onClick={handleUpdateProfile}>
                      Update
                    </button>
                  </div>
                  <div className="flx-row">
                    {" "}
                    {avatars.map((avatar) => (
                      <span>
                        <img
                          className="avatar-img"
                          onClick={() => uploadAvatarHandler(avatar)}
                          src={avatar}
                          alt="avatar"
                        />
                      </span>
                    ))}
                  </div>
                  <div className="edit-img">
                    <img
                      className="avatar"
                      src={userDetails?.avatarUrl}
                      alt=""
                    />
                    <label for="myFileInput" class="custom-file-input">
                      Choose a file
                    </label>
                    <input
                      type="file"
                      id="myFileInput"
                      class="hidden"
                      onChange={(e) => uploadFileHandler(e)}
                    />
                  </div>
                  <div className="user-profile-info">
                    <div className="edit-name">
                      <label htmlFor="name label">
                        <div>First Name </div>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              firstName: e.target.value,
                            })
                          }
                          value={userDetails.firstName}
                        />
                      </label>
                      <label htmlFor="name label">
                        <div>Last Name </div>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              lastName: e.target.value,
                            })
                          }
                          value={userDetails.lastName}
                        />
                      </label>
                      <label htmlFor="name label">
                        <div>Password </div>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              password: e.target.value,
                            })
                          }
                          value={userDetails.password}
                        />
                      </label>
                    </div>
                    <div className="edit-bio ">
                      <label htmlFor="name label">
                        <div>Bio </div>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              bio: e.target.value,
                            })
                          }
                          value={userDetails.bio}
                        />
                      </label>
                    </div>
                    <div className="edit-website ">
                      <label htmlFor="name label">
                        <div>website </div>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              website: e.target.value,
                            })
                          }
                          value={userDetails.website}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

                    <button className="edit btn-fb" onClick={handleButtonClick}>
                      Edit Profile
                    </button>
                    <button className="btn-fb" onClick={logoutHandler}>
                      LogOut
                    </button>
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
                  <span onClick={showFollowerList} className="cursor">
                    Follower
                  </span>
                  {/* showing followers list */}
                  {isShowFollowerListPopup && (
                    <div className="add-container popup-background flex">
                      <div className="avatar flx-space rm-br">
                        {/* <img
                        className="avatar rm-br"
                        src={userDetails.avatarUrl}
                        alt=""
                      /> */}
                        <button className="btn-fb" onClick={handleClosePopuo}>
                          X
                        </button>
                      </div>

                      <div className="add-content popup-content">
                        {loggedInUser?.followers.length === 0 && (
                          <div className="txt-col">No followers yet</div>
                        )}
                        {loggedInUser?.followers.map((user) => (
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
                <div className="following  gap">
                  {" "}
                  <span className="num">{loggedInUser?.following.length}</span>
                  <span className="cursor" onClick={showFollowingList}>
                    Following
                  </span>
                </div>
                {isShowListPopup && (
                  <div className="add-container popup-background flex">
                    <div className="avatar flx-space rm-br">
                      {/* <img
                        className="avatar rm-br"
                        src={userDetails.avatarUrl}
                        alt=""
                      /> */}
                      <button className="btn-fb" onClick={handleClosePopuo}>
                        X
                      </button>
                    </div>

                    <div className="add-content popup-content">
                      {loggedInUser?.following.length === 0 && (
                        <div className="txt-col">No following yet</div>
                      )}
                      {loggedInUser?.following.map((user) => (
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
          {loggedInUserPosts.map((post) => (
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

export default Profile;
