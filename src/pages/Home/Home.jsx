import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import SinglePost from "../../components/SinglePost/SinglePost";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Home = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  return (
    <div className="main-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="left-side">
        <LeftPanel />
      </div>
      <div className="content">
        {dataState.posts.map((post) => (
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
