import React from "react";
import "./SinglePost.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import {
  addCommentHandler,
  bookMarkPostHandler,
  deletePostHandler,
  disLikePostHandler,
  likePostHandler,
  removeBookMarkPostHandler,
} from "../../services/DataServices";
import { useState } from "react";
import { useNavigate } from "react-router";
import AddPost from "../AddPost/AddPost";
import AddComment from "../AddComment/AddComment";

const SinglePost = ({ post }) => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);
  // const { post?._id, content, firstName, lastName, userName, mediaUrl, createdAt } =
  //   post;

  const loggedInuser = dataState?.users?.find(
    (user) => user.username === currentUser.username
  );
  const userDetails = dataState.users.find(
    (user) => user.username === post.username
  );

  const isLiked = post?.likes?.likedBy?.some(
    (likedbyUser) =>
      likedbyUser.username.toLowerCase() === loggedInuser.username.toLowerCase()
  );
  // console.log(post);
  // console.log(isLiked, "isliked?");
  const handleLike = (_id, loginToken, dataDispatch) => {
    likePostHandler(post?._id, loginToken, dataDispatch);
  };
  const handleDislike = (_id, loginToken, dataDispatch) => {
    disLikePostHandler(post?._id, loginToken, dataDispatch);
  };

  const isBookmark = loggedInuser?.bookmarks.some(
    (postId) => post?._id === postId
  );

  const handleBookmark = () => {
    bookMarkPostHandler(post?._id, loginToken, dataDispatch, loggedInuser);
  };
  const handleRemoveBookmark = () => {
    removeBookMarkPostHandler(
      post?._id,
      loginToken,
      dataDispatch,
      loggedInuser
    );
  };
  console.log(loggedInuser, "lg-book");

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogOutsideClick = () => {
    setDialogOpen(false);
  };

  const handleEditPost = (_id) => {
    console.log(_id);
    dataDispatch({ type: "editPost", payload: post?._id });
    setDialogOpen(false);
    setShowEditPopup(true);
  };

  const handleDeletePost = (_id, loginToken, dataDispatch) => {
    deletePostHandler(_id, loginToken, dataDispatch);
    setDialogOpen(false);
  };
  const navigate = useNavigate();
  const handlePostDetails = (_id) => {
    navigate(`/post/${post?._id}`);
  };
  const [showEditPopup, setShowEditPopup] = useState(false);

  const navigateToProfile = (username) => {
    navigate(`/profile/${username}`);
  };
  const [showCommentPopup, setShowCommentPopup] = useState(false);

  // addCommentHandler(1, "hii", loginToken, dataDispatch);//for infinite loop due to re -rendring
  const handleAddComment = () => {
    setShowCommentPopup(true);
  };
  return (
    <div>
      <div className="post-container">
        <div
          className="user-img"
          onClick={() => navigateToProfile(post?.username)}
        >
          <img
            src={userDetails?.avatarUrl}
            alt=""
            className="user-img cursor"
          />
        </div>
        <div className="post-details" style={{ position: "relative" }}>
          <div className="user-info">
            <div className="user-detail">
              <div
                className="loggedIn-details cursor "
                onClick={() => navigateToProfile(post?.username)}
              >
                <div className="user-name">
                  {post?.firstName} {post?.lastName}
                </div>
                <div className="user-id">{post?.username}</div>
              </div>

              <div className="post-date">
                {new Date(post?.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div className="sort-icon cursor" onClick={handleButtonClick}>
                {currentUser.username === post?.username && (
                  <i class="fa-solid fa-list"></i>
                )}
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
                      right: "25px",
                      top: "6px",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li
                        onClick={() => handleEditPost(post?._id)}
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                      >
                        Edit
                      </li>
                      <li
                        onClick={() =>
                          handleDeletePost(post?._id, loginToken, dataDispatch)
                        }
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                      >
                        Delete
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {showEditPopup && (
                <AddPost onClose={() => setShowEditPopup(false)} />
              )}
            </div>
          </div>
          <div
            className="post-info"
            onClick={() => handlePostDetails(post?._id)}
          >
            <div className="post-content">
              <div>{post?.content}</div>
            </div>
            {post?.mediaUrl && (
              <div className="post-img">
                <img className="post-img" src={post?.mediaUrl} alt="" />
              </div>
            )}
          </div>

          <div className="task-btn">
            {isLiked ? (
              <span
                className="cursor"
                onClick={() =>
                  handleDislike(post?._id, loginToken, dataDispatch)
                }
              >
                <i
                  class="fa-solid fa-heart fa-2xl"
                  style={{ color: "blue" }}
                ></i>
                <span> {post?.likes?.likeCount} </span>
              </span>
            ) : (
              <span
                className="cursor"
                onClick={() => handleLike(post?._id, loginToken, dataDispatch)}
              >
                <i
                  class="fa-regular fa-heart fa-2xl"
                  style={{ color: "blue" }}
                ></i>
                <span> {post?.likes?.likeCount} </span>
              </span>
            )}

            <span
              className="cursor"
              onClick={() => handleAddComment(post?._id)}
            >
              <i
                class="fa-regular fa-comment fa-2xl "
                style={{ color: "blue" }}
              ></i>
              <span> {post?.comments?.length}</span>
            </span>
            {showCommentPopup && (
              <AddComment
                onClose={() => setShowCommentPopup(false)}
                postId={post?._id}
              />
            )}
            {isBookmark ? (
              <span className="cursor" onClick={handleRemoveBookmark}>
                <i
                  class="fa-solid fa-bookmark fa-2xl"
                  style={{ color: "blue" }}
                ></i>
              </span>
            ) : (
              <span className="cursor" onClick={handleBookmark}>
                <i
                  class="fa-regular fa-bookmark fa-2xl"
                  style={{ color: "blue" }}
                ></i>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
