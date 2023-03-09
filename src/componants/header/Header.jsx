import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../customutils/Config";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const HomeRoute = () => {
    navigate("/");
  };

  const ProductsRoute = () => {
    navigate("/qkart/brows/products");
  };

  const RegisterRoute = () => {
    navigate("/qkart/user/register");
  };

  const LoginRoute = () => {
    navigate("/qkart/user/login");
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/qkart/user/login");
  };

  const username = localStorage.getItem("username");

  return (
    <div className="header">
      {useAuth() ? (
        <div>
          <span>{username}</span>
          <button type="button" className="btn btn-primary" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <div>
            <button
              type="button"
              className="qkart btn"
              onClick={() => HomeRoute()}
            >
              Q Kart
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => LoginRoute()}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => RegisterRoute()}
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => ProductsRoute()}
            >
              Explore
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
