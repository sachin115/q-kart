import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./componants/allproducts/AllProducts";
import UserLogin from "./componants/auth/UserLogin";
import UserRegistration from "./componants/auth/UserRegister";
import HomePage from "./componants/homepage";
import PlaceOrders from "./componants/placeorders/PlaceOrders";
import ProtectedRoutes from "./componants/protectedroutes/ProtectedRoutes";
import PublicRoutes from "./componants/publicroutes/PublicRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/qkart/user/register" element={<UserRegistration />} />
          <Route path="/qkart/user/login" element={<UserLogin />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/qkart/brows/products" element={<AllProducts />} />
          <Route path="/qkart/place/orders" element={<PlaceOrders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
