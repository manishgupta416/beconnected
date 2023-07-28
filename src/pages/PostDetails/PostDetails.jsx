import React, { useContext } from "react";
import "./PostDetails.css";
import SinglePost from "../../components/SinglePost/SinglePost";
import { useParams } from "react-router";
import { DataContext } from "../../context/DataContext";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";

const PostDetails = () => {
  const { postId } = useParams();
  const { dataState } = useContext(DataContext);
  const post = dataState.posts.find(
    (post) => post._id.toString() === postId.toString()
  );
  console.log(post);
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
                <img
                  src="https://picsum.photos/id/1012/150"
                  alt=""
                  className="user-img"
                />
              </div>
              <div className="input-comment-container">
                <input
                  className="reply-input"
                  type="text"
                  placeholder="post your reply"
                />
                <button className="reply-btn">Reply</button>
              </div>
            </div>
            <div className="users-reply">
              <div className="user-img">
                <img
                  src="https://picsum.photos/id/1012/150"
                  alt=""
                  className="user-img"
                />
              </div>
              <div className="flex-col">
                <div className="user-info">
                  <div className="user-detail">
                    <div className="loggedIn-details cursor">
                      <div className="user-name">manish kumar gupta</div>
                      <div className="user-id ">@manishgupta</div>
                    </div>

                    <div className="post-date">24 June 2023</div>
                  </div>
                </div>
                <div className="user-comment">Looks Good!! </div>
              </div>
            </div>
            {/* other users */}
            <hr />
            <div className="users-reply">
              <div className="user-img">
                <img
                  src="https://picsum.photos/id/1012/150"
                  alt=""
                  className="user-img"
                />
              </div>
              <div className="flex-col">
                <div className="user-info">
                  <div className="user-detail">
                    <div className="loggedIn-details cursor">
                      <div className="user-name ">priya gupta</div>
                      <div className="user-id ">@priyagupta</div>
                    </div>

                    <div className="post-date">24 June 2023</div>
                  </div>
                </div>
                <div className="user-comment">Looking Amazing!! </div>
              </div>
            </div>
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
