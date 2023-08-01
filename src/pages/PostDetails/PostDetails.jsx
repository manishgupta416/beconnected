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
import {
  deleteCommentHandler,
  editCommentHandler,
} from "../../services/DataServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PostDetails = () => {
  const { postId } = useParams();
  const { dataState, dataDispatch } = useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);
  const post = dataState.posts.find(
    (post) => post._id.toString() === postId.toString()
  );
  console.log(post, "clickedpost in postdetail");

  const loggedInuser = dataState?.users?.find(
    (user) => user.username === currentUser.username
  );

  const [showCommentPopup, setShowCommentPopup] = useState(false);

  // addCommentHandler(1, "hii", loginToken, dataDispatch);//for infinite loop due to re -rendring
  const handleAddComment = () => {
    setShowCommentPopup(true);
  };
  console.log(dataState.posts, "commentedData");

  const [isDialogOpen, setDialogOpen] = useState(true); //facing prblm it open for all but i want ki jispe click ho sirf uspe hi pop ho
  const [dialogCommentId, setDialogCommentId] = useState(null);
  const handleButtonClick = (commentId) => {
    console.log("clickedddddd", commentId);
    setDialogCommentId(commentId);
  };

  const handleDialogOutsideClick = () => {
    setDialogCommentId(null);
  };

  const handleDeleteComment = (
    postId,
    commentId,
    commentData,
    loginToken,
    dataDispatch
  ) => {
    console.log("deleing");
    deleteCommentHandler(
      postId,
      commentId,
      commentData,
      loginToken,
      dataDispatch
    );
    setDialogCommentId(null);
    toast.success("Comment Deleted!!", {
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

  const handleEditComment = (
    postId,
    commentId,
    commentText,
    loginToken,
    dataDispatch
  ) => {
    console.log(commentId, "commentId");
    dataDispatch({ type: "editComment", payload: commentId });
    setDialogCommentId(null);
    setShowCommentPopup(true);
  };

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
                <div className="ps-rel">
                  <div className="users-reply ">
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
                      <div className="user-comment comment-txt">
                        {comment.text}{" "}
                      </div>
                    </div>
                    <div
                      className="sort-icon cursor"
                      onClick={() => handleButtonClick(comment._id)}
                    >
                      {comment.username === loggedInuser.username && (
                        <i class="fa-solid fa-list "></i>
                      )}
                    </div>
                  </div>

                  {dialogCommentId === comment._id && (
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
                          padding: "11px",
                          borderRadius: "8px",
                          boxShadow: "0 0 16px rgba(0, 0, 0, 0.3)",
                          maxWidth: "240px",
                          position: "absolute",
                          right: "50px",
                          bottom: "30px",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            onClick={() =>
                              handleEditComment(
                                postId,
                                comment._id,
                                comment.text,
                                loginToken,
                                dataDispatch
                              )
                            }
                            style={{ cursor: "pointer", marginBottom: "8px" }}
                          >
                            Edit
                          </li>
                          <li
                            onClick={() =>
                              handleDeleteComment(
                                postId,
                                comment._id,
                                comment.text,
                                loginToken,
                                dataDispatch
                              )
                            }
                            style={{ cursor: "pointer", marginBottom: "8px" }}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
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
