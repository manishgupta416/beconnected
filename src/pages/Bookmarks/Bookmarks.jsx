import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import SinglePost from "../../components/SinglePost/SinglePost";
import RightPanel from "../../components/RightPanel/RightPanel";
import { AuthContext } from "../../context/AuthContext";

const Bookmarks = () => {
  const { dataState } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const loggedInUser = dataState.users.find(
    (user) => user.username === currentUser.username
  );
  console.log(loggedInUser, "bookm");

  const bookmarkedPost = dataState.posts.filter((post) =>
    loggedInUser.bookmarks.find((bp) => post._id === bp)
  );
  return (
    <div>
      <div className="main-container">
        <div className="nav">
          <Navbar />
        </div>
        <div className="left-side">
          <LeftPanel />
        </div>
        <div className="content">
          {bookmarkedPost.map((post) => (
            <SinglePost post={post} key={post._id} />
          ))}
        </div>
        <div className="right-side">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
