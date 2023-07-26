import { useReducer } from "react";
import { createContext } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { useEffect } from "react";
import { getAllPosts, getAllUsers } from "../services/DataServices";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    getAllPosts(dispatch);
    getAllUsers(dispatch);
  }, []);

  return (
    <DataContext.Provider value={{ user: "manish" }}>
      {children}
    </DataContext.Provider>
  );
};
