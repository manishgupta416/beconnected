import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/api-test" element={<Mockman />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
