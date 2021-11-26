import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// inputIcon hover
let inputIconHover = document.querySelector(".inputIconBtn");

inputIconHover.addEventListener("mouseenter", function (event) {
  event.target.style.backgroundColor = "#eee";
});

inputIconHover.addEventListener("mouseleave", function (event) {
  event.target.style.backgroundColor = "#fff";
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
