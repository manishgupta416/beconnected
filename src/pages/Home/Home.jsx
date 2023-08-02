import React, { useEffect, useState } from "react";
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
  const { dataState, dataDispatch, sortBtnText, setSortBtnText } =
    useContext(DataContext);
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

  const sortByDateOldest = (post1, post2) =>
    new Date(post1.createdAt) - new Date(post2.createdAt);

  const sortByDateLatest = (post1, post2) =>
    new Date(post2.createdAt) - new Date(post1.createdAt);

  const sortByLikes = (post1, post2) =>
    post2.likes.likeCount - post1.likes.likeCount;

  const sortFilteredPost =
    sortBtnText.length > 0
      ? sortBtnText === "Trending"
        ? feedPosts.sort(sortByLikes)
        : sortBtnText === "Latest"
        ? feedPosts.sort(sortByDateLatest)
        : feedPosts.sort(sortByDateOldest)
      : feedPosts;

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="left-side">
        <LeftPanel />
      </div>
      <div className="content">
        {/* <AddPost /> */}
        {sortFilteredPost?.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </div>
      <div className="right-side">
        <RightPanel homeposts />
      </div>
    </div>
  );
};

export default Home;
