import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import Sign from "./pages/Sign/Sign";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/api-test" element={<Mockman />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
