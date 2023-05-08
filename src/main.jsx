import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "../src/context/AuthContext";
import { BlogProvider } from "../src/context/BlogContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>
);
