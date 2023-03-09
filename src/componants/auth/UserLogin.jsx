import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./auth.css";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const UserData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("balance", response.data.balance);
        localStorage.setItem("username", response.data.username);

        navigate("/qkart/brows/products");
      }
    } catch (message) {
      alert(message);
    }
  };

  return (
    <div>
      <Header />
      <form className="card">
        <div className="form-group">
          <br />
          <br />
          <br />
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          onClick={(e) => UserData(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
