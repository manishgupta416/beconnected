import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import SinglePost from "../../components/SinglePost/SinglePost";

const Home = () => {
  return (
    <div className="main-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="left-side">
        <LeftPanel />
      </div>
      <div className="content">
        <SinglePost />
      </div>
      <div className="right-side">
        <RightPanel />
      </div>
    </div>
  );
};

export default Home;
