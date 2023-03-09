import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./auth.css";

const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const navigate = useNavigate();

  const UserData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        username,
        password,
      });
      if (response.data.success) {
        navigate("/qkart/user/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <form className="card">
        <div className="form-group">
          <h2>Registration</h2>
          <hr />
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Conform Password"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          onClick={(e) => UserData(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
