import { useReducer } from "react";
import { createContext } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { useEffect } from "react";
import { getAllPosts, getAllUsers } from "../services/DataServices";
import { useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBtnText, setSortBtnText] = useState("");

  useEffect(() => {
    getAllPosts(dataDispatch);
    getAllUsers(dataDispatch);
  }, []);

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
