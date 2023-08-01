import { useReducer } from "react";
import { createContext } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { useEffect } from "react";
import { getAllPosts, getAllUsers } from "../services/DataServices";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { loginToken, currentUser } = useContext(AuthContext);
  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBtnText, setSortBtnText] = useState("");

  useEffect(() => {
    getAllPosts(dataDispatch);
    getAllUsers(dataDispatch);
  }, [loginToken]); // it re-render when new user signup otherwise will get error Cannot read properties of undefined (reading 'username')

  return (
    <DataContext.Provider
      value={{
        user: "manish",
        dataState,
        dataDispatch,
        isLoading,
        setIsLoading,
        sortBtnText,
        setSortBtnText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
