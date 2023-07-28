import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import SinglePost from "../../components/SinglePost/SinglePost";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import { posts } from "../../backend/db/posts";
import AddPost from "../../components/AddPost/AddPost";

const Home = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { currentUser, loginToken } = useContext(AuthContext);

  const loggedInUser = dataState.users.find(
    (user) => user.username === currentUser.username
  );

  const loggedInUserPosts = dataState.posts.filter(
    (post) => post.username === loggedInUser.username
  );
  const followedUserPosts = posts.filter((post) =>
    loggedInUser?.following?.find((user) => user.username === post.username)
  );
  console.log(followedUserPosts, "fp");

  const feedPosts = [...loggedInUserPosts, ...followedUserPosts];
  console.log(feedPosts, "hoem posts");
  return (
    <div className="main-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="left-side">
        <LeftPanel />
      </div>
      <div className="content">
        <AddPost />
        {feedPosts?.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </div>
      <div className="right-side">
        <RightPanel />
      </div>
    </div>
  );
};

export default Home;
