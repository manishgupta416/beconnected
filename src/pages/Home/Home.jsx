import React, { useState } from "react";
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

  const [data, setData] = useState(feedPosts);
  const [isDescending, setIsDescending] = useState(true); // Track the sorting order

  // Function to handle the sorting logic
  const handleSortByDate = () => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (isDescending) {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
    setData(sortedData);
    setIsDescending(!isDescending);
  };

  const sortFilteredPost =
    sortBtnText.length > 0
      ? feedPosts.sort((post1, post2) =>
          sortBtnText === "Trending"
            ? post2.likes.likeCount - post1.likes.likeCount
            : handleSortByDate
        )
      : feedPosts;

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
