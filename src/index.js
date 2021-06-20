import React from "react";
import ReactDOM from "react-dom";
import {SignupContext} from "./store/SignupContext"
import App from "./App"; 
import "./assets/css/global.css";
import "./assets/css/terms.css";
import "./assets/css/article.css";
import "./assets/css/readmore.css";



ReactDOM.render(
  <React.StrictMode>
  <SignupContext>
    <App />
  </SignupContext>
  </React.StrictMode>,
  document.getElementById("root")
);
