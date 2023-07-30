import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { v4 as uuid } from "uuid";
import {
  addCommentHandler,
  editCommentHandler,
} from "../../services/DataServices";

const AddComment = ({ onClose, postId }) => {
  const { currentUser, loginToken } = useContext(AuthContext);
  const { dataState, dataDispatch } = useContext(DataContext);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const [commentData, setCommentData] = useState("");

  const handleClose = () => {
    onClose();
  };
  const addNewCommentHandler = () => {
    if (dataState.commentId) {
      //edit comment
      if (commentData.length > 0) {
        editCommentHandler(
          postId,
          dataState.commentId.toString(),
          commentData,
          loginToken,
          dataDispatch
        );

        dataDispatch({ type: "editComment", payload: null });
        alert("comment Updated!");
        onClose();
      } else {
        alert("Please add something to reply");
      }
    } else {
      //adding new comment
      if (commentData.length > 0) {
        addCommentHandler(postId, commentData, loginToken, dataDispatch);
        dataDispatch({ type: "editComment", payload: null });
        setCommentData("");
        onClose();
      } else {
        alert("Please add something to reply");
      }
    }
  };

  useEffect(() => {
    //whenever you pass id as prop make sure to convert it into .tostring otherwise you'll get stuck for long to debug , also do as much console to debug
    const postData = dataState.posts?.find(
      (post) => postId.toString() === post?._id.toString()
    );
    console.log(postData, dataState.commentId, "commmmmmmp");
    const commentDetails = postData.comments.find(
      (comment) => comment?._id.toString() === dataState?.commentId.toString()
    );
    console.log(postData, "postdaat");
    if (dataState?.commentId) {
      setCommentData(commentDetails?.text);
    } else {
      setCommentData("");
    }
  }, [dataState.commentId]);
  return (
    <div>
      <div className="add-container popup-background flex">
        <div className="avatar flx-space rm-br">
          <img className="avatar rm-br" src={currentUser.avatarUrl} alt="" />
          <button onClick={handleClose}>Close</button>
        </div>

        <div className="add-content popup-content">
          <div className="add-input">
            <textarea
              className="add-txt txt-area"
              type="text"
              name=""
              id=""
              placeholder="Add a comment..."
              onChange={(e) => setCommentData(e.target.value)}
              value={commentData}
            />
          </div>
          <button onClick={() => addNewCommentHandler()}>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
