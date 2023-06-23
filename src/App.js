import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import Sign from "./pages/Sign/Sign";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/api-test" element={<Mockman />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
