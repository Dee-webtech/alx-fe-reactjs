import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // points to App.jsx now
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
