import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BoxList from "./components/Box-List/box-list";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BoxList />
  </React.StrictMode>
);

reportWebVitals();
