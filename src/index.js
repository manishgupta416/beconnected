import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthContextProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
