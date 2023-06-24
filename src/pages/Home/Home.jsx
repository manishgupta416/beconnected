import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import Sign from "../Sign/Sign";
import SignUp from "../SignUp/SignUp";
import {
  getAllUsers,
  getUser,
  editUserHandler,
  getAllPosts,
  getPost,
  getPostByUserName,
  createNewPostHandler,
  deletePostHandler,
  editPostHandler,
  likePostHandler,
  disLikePostHandler,
  bookMarkPostHandler,
  removeBookMarkPostHandler,
  getBookMarkPost,
  followUserHandler,
  unfollowUserHandler,
} from "../../services/DataServices.js";
import { AuthContext } from "../../context/AuthContext";
const Home = () => {
  const { loginToken } = useContext(AuthContext);

  //DONETODO:   User Routes

  // getAllUsers();

  // editUserHandler(
  //   {
  //     _id: "1",
  //     firstName: "s",
  //     lastName: "gupta",
  //     username: "manish@gmail.com",
  //     password: "manishguptass",
  //     bio: "Coding enthusiast",
  //     bookmarks: "[]",
  //     followers: "[]",
  //     following: "[]",
  //     website: "https://example.com/",
  //   },
  //   loginToken
  // );

  // getUser(1);
  // console.log(loginToken);

  // DONETODO: Post api Routes

  // getAllPosts();

  // getPost(1);

  // getPostByUserName("adarshbalika");

  // createNewPostHandler(
  //   {
  //     _id: 5,
  //     content: "i love you",

  //     username: "priya",
  //   },
  //   loginToken
  // );

  // getAllPosts();

  // deletePostHandler(3, loginToken);

  //
  // editPostHandler(
  //   3,
  //   {
  //     _id: 3,
  //     content: "mahak gupta",
  //     likes: {
  //       likeCount: 0,
  //       likedBy: [],
  //       dislikedBy: [],
  //     },
  //     username: "manish@gmail.com",
  //     createdAt: "formatDate()",
  //     updatedAt: "formatDate()",
  //   },
  //   loginToken
  // );

  // getAllPosts();

  //DONETODO:  Like/Dislike Post Routes

  // likePostHandler("1", loginToken);
  // disLikePostHandler(1, loginToken);

  //DONETODO: Bookmark Post routes

  // bookMarkPostHandler(1, loginToken);
  // getBookMarkPost(loginToken);
  // removeBookMarkPostHandler(1, loginToken);

  //DONETODO: Follow/Unfollow Routes

  // followUserHandler(3, loginToken);
  // unfollowUserHandler(3, loginToken);

  return (
    <div>
      <Navbar />
      {/* <LeftPanel /> */}
      {/* <RightPanel /> */}
      {/* <Sign /> */}
      {/* <SignUp /> */}
    </div>
  );
};

export default Home;
