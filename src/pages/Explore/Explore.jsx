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
        const pageSize = 5;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const newData = dataState.posts.slice(startIndex, endIndex);
        console.log(newData, "slice data");
        setData((prevData) => [...prevData, ...newData]);

        if (data.length === totalDataLength) {
          setIsLoading(false);
        }
      }, 300);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setTotalDataLength(dataState.posts.length);
  }, [dataState.posts.length]);

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
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
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
