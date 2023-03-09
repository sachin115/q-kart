import React from "react";
import { useAuth } from "../customutils/Config";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  return !useAuth() ? <Outlet /> : <Navigate to="/qkart/brows/products" />;
};

export default PublicRoutes;
