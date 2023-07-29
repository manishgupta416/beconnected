import React, { useContext, useState } from "react";
import "./PostDetails.css";
import SinglePost from "../../components/SinglePost/SinglePost";
import { useParams } from "react-router";
import { DataContext } from "../../context/DataContext";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import { AuthContext } from "../../context/AuthContext";
import AddComment from "../../components/AddComment/AddComment";

const PostDetails = () => {
  const { postId } = useParams();
  const { dataState } = useContext(DataContext);
  const post = dataState.posts.find(
    (post) => post._id.toString() === postId.toString()
  );
  console.log(post, "clickedpost in postdetail");
  const { currentUser, loginToken } = useContext(AuthContext);

  const loggedInuser = dataState?.users?.find(
    (user) => user.username === currentUser.username
  );

  const [showCommentPopup, setShowCommentPopup] = useState(false);

  // addCommentHandler(1, "hii", loginToken, dataDispatch);//for infinite loop due to re -rendring
  const handleAddComment = () => {
    setShowCommentPopup(true);
  };
  console.log(dataState.posts, "commentedData");

  return (
    <>
      <div className="main-container">
        <div className="nav">
          <Navbar />
        </div>
        <div className="left-side">
          <LeftPanel />
        </div>
        <div className="content">
          <div className="profile-details-container">
            <SinglePost post={post} />
            <div className="reply-container">
              <div className="user-img">
                <img src={loggedInuser.avatarUrl} alt="" className="user-img" />
              </div>
              <div
                className="input-comment-container"
                onClick={() => handleAddComment()}
              >
                <input
                  className="reply-input"
                  type="text"
                  placeholder="post your reply"
                  readOnly
                />
                {/* <button className="reply-btn">Reply</button> */}
              </div>
              {showCommentPopup && (
                <AddComment
                  postId={postId}
                  onClose={() => setShowCommentPopup(false)}
                />
              )}
            </div>
            {post.comments.map((comment) => (
              <div>
                <div>
                  <div className="users-reply">
                    <div className="user-img">
                      <img src={comment?.pic} alt="" className="user-img" />
                    </div>
                    <div className="flex-col">
                      <div className="user-info">
                        <div className="user-detail">
                          <div className="loggedIn-details cursor">
                            <div className="user-name">
                              {comment?.firstName} {comment?.lastName}
                            </div>
                            <div className="user-id ">@{comment.username}</div>
                          </div>

                          <div className="post-date">
                            {new Date(comment.updatedAt).toLocaleString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="user-comment">{comment.text} </div>
                    </div>
                  </div>
                  {/* other users */}
                  <hr />
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="right-side">
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export default PostDetails;
