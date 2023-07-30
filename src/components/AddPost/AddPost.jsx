import React, { useContext, useEffect, useState } from "react";
import "./AddPost.css";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import {
  createNewPostHandler,
  editPostHandler,
} from "../../services/DataServices";

import { v4 as uuid } from "uuid";

const AddPost = ({ onClose }) => {
  const { dataState, dataDispatch, addPostBtn, setAddPostBtn } =
    useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);
  const [showEditPopup, setShowEditPopup] = useState(false);
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
        onClose();
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
        onClose();
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

  const handleClose = () => {
    dataDispatch({ type: "editPost", payload: null }); //postId null so that it will goes toelse wala part of useEff
    onClose();
  };
  const emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "🤗",
    "🤩",
    "😣",
    "😥",
    "😌",
    "😴",
    "😫",
    "😪",
    "😯",
    "😝",
    "😲",
    "😭",
    "😢",
    "😨",
    "🤪",
    "😵",
    "🤡",
    "🤠",
    "🥺",
    "🥳",
    "😇",
    "🤧",
    "🧐",
    "🤓",
    "🙀",
    "😾",
    "🙈",
    "😽",
    "❤",
    "🧡",
    "🖤",
    "🤎",
    "💗",
    "💖",
    "💌",
    "💕",
    "💚",
    "💙",
    "💌",
    "🧨",
    "✨",
    "🎉",
    "🎊",
    "🎃",
    "🎑",
    "🎆",
    "🎈",
    "🎀",
    "🎄",
    "🎁",
    "🍿",
    "🧂",
    "🍕",
    "🍳",
    "🥖",
    "🍗",
    "🍚",
  ];
  const [showEmojiPopup, setShowEmojiPopup] = useState(false);
  const showEmojiList = () => {
    setShowEmojiPopup(true);
  };

  const handleClosePopup = () => {
    setShowEmojiPopup(false);
  };

  const handleEmoji = (emoji) => {
    setPostDetails({
      ...postDetails,
      content: `${postDetails?.content}${emoji}`,
    });
  };
  return (
    <div>
      {" "}
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
              <div onClick={showEmojiList} className="cursor emoji">
                😃
              </div>
              {showEmojiPopup && (
                <div className="add-container popup-background flex">
                  <div className="avatar flx-space rm-br">
                    <button onClick={handleClosePopup}>Close</button>
                  </div>

                  <div className="emoji-container popup-content ">
                    {emojis.map((emoji) => (
                      <span
                        className="flex-rw cursor"
                        onClick={() => handleEmoji(emoji)}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
