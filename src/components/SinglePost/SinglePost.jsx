import React from "react";
import "./SinglePost.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const SinglePost = ({ post }) => {
  const { dataState } = useContext(DataContext);
  const { _id, content, firstName, lastName, userName, mediaUrl, createdAt } =
    post;
  const userDetails = dataState.users.find(
    (user) => user.username === post.username
  );

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
            <span>
              <button className="cursor">
                <i class="fa-regular fa-thumbs-up fa-xl"></i>
              </button>{" "}
              {post.likes.likeCount}{" "}
            </span>{" "}
            <button className="cursor">
              <i class="fa-regular fa-comment fa-xl"></i>
            </button>
            <button className="cursor">
              <i class="fa-regular fa-bookmark fa-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
