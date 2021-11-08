import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Lodging from './pages/Lodging'
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route exact path="/">
        <App />
        </Route>
        <Route path="/lodging">
          <Lodging />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
