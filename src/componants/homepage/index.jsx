import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";


const HomePage = () => {

    const navigate = useNavigate()

    const RouteRegister = () => {
        navigate("/qkart/user/register")
    }

    const RouteLogin = () => {
        navigate("/qkart/user/login")
    }

    const RouteBrowsProducts = () => {
        navigate("/qkart/brows/products")
    }
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <p>Welcome To QKART</p>
          <h6>Please select an option from below</h6>
        </div>
        <div className="card-action">
          <button type="button" className="btn btn-light" onClick={RouteRegister}>
            Register
          </button>
          <button type="button" className="btn btn-light" onClick={RouteLogin}>
            Login
          </button>
          <button type="button" className="btn btn-light" onClick={RouteBrowsProducts}>
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
