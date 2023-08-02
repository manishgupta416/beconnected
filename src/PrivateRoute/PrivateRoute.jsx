import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const PrivateRoute = ({ children }) => {
  const { loginToken, currentUser } = useContext(AuthContext);
  const location = useLocation();
  return loginToken && currentUser.username ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default PrivateRoute;
