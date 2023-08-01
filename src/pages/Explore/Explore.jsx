import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import SinglePost from "../../components/SinglePost/SinglePost";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import "./Explore.css";
import Loader from "../../components/Loader/Loader";
const Explore = () => {
  const { dataState } = useContext(DataContext);

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
          {dataState.posts?.map((post) => (
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

export default Explore;
