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
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalDataLength, setTotalDataLength] = useState(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        const pageSize = 5; //pageSize = 5 will fetch 5 posts at a time when the user reaches the end of the page.
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const newData = dataState.posts.slice(startIndex, endIndex);
        console.log(newData, "slice data");
        setData((prevData) => [...prevData, ...newData]);
        // Check if all data has been fetched
        if (data.length === totalDataLength) {
          setIsLoading(false);
        }
      }, 400); // 1 second delay
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  // Call fetchData when the page changes and ensure page is greater than 0
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setTotalDataLength(dataState.posts.length);
  }, [dataState.posts.length]);

  // Scroll event handler for infinite scrolling
  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    // Clean up fn
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  console.log("datalength", data.length);
  console.log("totalpost", dataState.posts.length);
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
          {/* Show  while loading more data */}
          {isLoading && <Loader />}
          {/* Show when all data is fetched */}
          {!isLoading && data.length === totalDataLength && (
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
