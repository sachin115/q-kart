import React from "react";
import { useAuth } from "../customutils/Config";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
    return useAuth() ? <Outlet /> : <Navigate to="/qkart/user/login" />
}


export default ProtectedRoutes;