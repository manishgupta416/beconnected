import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/api-test" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
