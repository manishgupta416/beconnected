import React from "react";
import "./SinglePost.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import {
  bookMarkPostHandler,
  disLikePostHandler,
  likePostHandler,
  removeBookMarkPostHandler,
} from "../../services/DataServices";

const SinglePost = ({ post }) => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);
  const { _id, content, firstName, lastName, userName, mediaUrl, createdAt } =
    post;

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
    likePostHandler(_id, loginToken, dataDispatch);
  };
  const handleDislike = (_id, loginToken, dataDispatch) => {
    disLikePostHandler(_id, loginToken, dataDispatch);
  };

  const isBookmark = loggedInuser.bookmarks.some(
    (bookmark) => bookmark._id === _id
  );

  const handleBookmark = (_id, loginToken, dataDispatch, loggedInuser) => {
    bookMarkPostHandler(_id, loginToken, dataDispatch, loggedInuser);
  };
  const handleRemoveBookmark = (
    _id,
    loginToken,
    dataDispatch,
    loggedInuser
  ) => {
    removeBookMarkPostHandler(_id, loginToken, dataDispatch, loggedInuser);
  };
  console.log(loggedInuser, "book");
  return (
    <div>
      <div className="post-container">
        <div className="user-img">
          <img
            src={userDetails?.avatarUrl}
            alt=""
            className="user-img cursor"
          />
        </div>
        <div className="post-details">
          <div className="user-info">
            <div className="user-detail">
              <div className="loggedIn-details cursor">
                <div className="user-name">
                  {post?.firstName} {post?.lastName}
                </div>
                <div className="user-id">{post?.username}</div>
              </div>

              <div className="post-date">{post?.createdAt.split("T")[0]}</div>
              <div className="sort-icon cursor">
                <i class="fa-solid fa-list"></i>
              </div>
            </div>
          </div>
          <div className="post-content">
            <div>{post?.content}</div>
          </div>
          {post?.mediaUrl && (
            <div className="post-img">
              <img className="post-img" src={post?.mediaUrl} alt="" />
            </div>
          )}
          <div className="task-btn">
            {isLiked ? (
              <span
                className="cursor"
                onClick={() =>
                  handleDislike(post._id, loginToken, dataDispatch)
                }
              >
                <i
                  class="fa-solid fa-heart fa-2xl"
                  style={{ color: "blue" }}
                ></i>
                <span> {post.likes.likeCount} </span>
              </span>
            ) : (
              <span
                className="cursor"
                onClick={() => handleLike(post._id, loginToken, dataDispatch)}
              >
                <i
                  class="fa-regular fa-heart fa-2xl"
                  style={{ color: "blue" }}
                ></i>
                <span> {post.likes.likeCount} </span>
              </span>
            )}

            <span className="cursor">
              <i
                class="fa-regular fa-comment fa-2xl "
                style={{ color: "blue" }}
              ></i>
            </span>
            {isBookmark ? (
              <span
                className="cursor"
                onClick={() =>
                  handleRemoveBookmark(
                    _id,
                    loginToken,
                    dataDispatch,
                    loggedInuser
                  )
                }
              >
                <i
                  class="fa-solid fa-bookmark fa-2xl"
                  style={{ color: "blue" }}
                ></i>
              </span>
            ) : (
              <span
                className="cursor"
                onClick={() =>
                  handleBookmark(_id, loginToken, dataDispatch, loggedInuser)
                }
              >
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
