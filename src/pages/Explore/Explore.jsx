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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const pageSize = 5; // Number of posts to display on each page

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    // Initial data fetch
    setData(dataState.posts.slice(0, pageSize));
  }, [dataState.posts]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        const nextPage = Math.ceil(data.length / pageSize) + 1;
        const startIndex = (nextPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setData((prevData) => [
          ...prevData,
          ...dataState.posts.slice(startIndex, endIndex),
        ]);
        setIsLoading(false);
      }, 500);
    }
  }, [isLoading, data.length, dataState.posts]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
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
          {data?.map((post) => (
            <SinglePost post={post} key={post._id} />
          ))}
          {isLoading && <Loader />}
          {!isLoading && data.length === dataState.posts.length && (
            <p>All posts have been fetched.</p>
          )}
        </div>
        <div className="right-side">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Explore;
