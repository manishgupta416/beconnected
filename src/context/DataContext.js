import { useReducer } from "react";
import { createContext } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { useEffect } from "react";
import { getAllPosts, getAllUsers } from "../services/DataServices";
import { useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);
  const [addPostBtn, setAddPostBtn] = useState(false);

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
        addPostBtn,
        setAddPostBtn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
