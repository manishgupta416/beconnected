import React, { useContext, useEffect, useState } from "react";
import "./AddPost.css";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import {
  createNewPostHandler,
  editPostHandler,
} from "../../services/DataServices";

import { v4 as uuid } from "uuid";

const AddPost = () => {
  const { dataState, dataDispatch, addPostBtn, setAddPostBtn } =
    useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);

  const [postDetails, setPostDetails] = useState({
    _id: uuid(),
    content: "",
    mediaUrl: "",
    comments: [],
    // ...currentUser,
  });

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    setPostDetails({ ...postDetails, mediaUrl: URL.createObjectURL(file) });
  };

  const handleImageRemove = () => {
    setPostDetails({ ...postDetails, mediaUrl: "" });
  };

  const addNewPostHandler = () => {
    if (dataState.postId) {
      //edit post
      if (postDetails.content.length > 0 || postDetails.mediaUrl) {
        editPostHandler(
          dataState.postId,
          postDetails,
          loginToken,
          dataDispatch
        );

        dataDispatch({ type: "editPost", payload: null });
        alert("Post Updated!");
      } else {
        alert("Please add something to post ");
      }
    } else {
      //adding new post
      if (postDetails.content.length > 0 || postDetails.mediaUrl) {
        createNewPostHandler(postDetails, loginToken, dataDispatch);
        dataDispatch({ type: "editPost", payload: null });
        setPostDetails({
          _id: uuid(),
          content: "",
          mediaUrl: "",
          comments: [],
          // ...currentUser, //because of this create handlr not wrk
        });
      } else {
        alert("Please add something to post");
      }
    }
  };
  useEffect(() => {
    const postData = dataState.posts?.find(
      (post) => dataState.postId === post._id
    );
    console.log(postData, "postdaat");
    if (dataState.postId) {
      setPostDetails(postData);
    } else {
      setPostDetails({
        _id: uuid(),
        content: "",
        mediaUrl: "",
        comments: [],
        // ...currentUser, //because of this create handlr not wrk
      });
    }
  }, [dataState.postId]);
  return (
    <div>
      {" "}
      <div className="add-container">
        <div className="avatar">
          <img className="avatar" src={currentUser.avatarUrl} alt="" />
        </div>
        <div className="add-content">
          <div className="add-input">
            <textarea
              className="add-txt txt-area"
              type="text"
              name=""
              id=""
              placeholder="Whats happening"
              onChange={(e) =>
                setPostDetails({ ...postDetails, content: e.target.value })
              }
              value={postDetails.content}
            />
          </div>

          <div className="add-img-preview">
            {" "}
            {postDetails?.mediaUrl && (
              <div className="add-img">
                <div className="add-img">
                  <img className="add-img" src={postDetails.mediaUrl} alt="" />
                </div>
                <div className="not-select-btn">
                  <button
                    className="cursor rm-btn"
                    onClick={() => handleImageRemove()}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="add-file-btns">
            <div className="edit-img">
              <img src="" alt="" />
              <label for="myFileInput" class="custom-file-input">
                Choose a file
              </label>
              <input
                type="file"
                id="myFileInput"
                class="hidden"
                onChange={(e) => uploadFileHandler(e)}
              />
              <button onClick={() => addNewPostHandler()}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
