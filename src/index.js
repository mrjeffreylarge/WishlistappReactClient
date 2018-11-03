import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MyComponent from "./components/App";


ReactDOM.render(
  <Router>
    <MyComponent />
  </Router>,
  document.getElementById("root")
);
