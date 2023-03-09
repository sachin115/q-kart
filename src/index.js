import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = "https://mkart-frontend.herokuapp.com/api/v1";

if (localStorage.token) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.token;
} else {
  delete axios.defaults.headers.common["Authorization"];
}

// axios.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     if (err.response.status === 400) {
//       localStorage.clear();
//     }
//     return Promise.reject(err);
//   }
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
