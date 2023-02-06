import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../Pages/website/About";
import Checkout from "../Pages/website/Checkout";
import Contact from "../Pages/website/Contact";
import Home from "../Pages/website/Home";
import Item from "../Pages/website/Item";
import Notfound from "../Pages/website/Notfound";
import Profile from "../Pages/website/Profile";
import Register from "../Pages/website/Register";
import Shop from "../Pages/website/Shop";
import CartTotal from "../Pages/website/CartTotal";
import Login from "./SignIn";
import { AnimatePresence } from "framer-motion";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../context/AuthContext";
import axios from "axios";
import { AdminProvider } from "../context/AdminContext";
import { ProductProvider } from "../context/ProductContext";
import MainLayout from "../outlet/MainLayout";
import AdminLayout from "../outlet/AdminLayout";
import Dashboard from "../Pages/dashboard/Dashboard";
// import MasterLayout from '../layouts/admin/MasterLayout';
import { CartProvider } from "../context/CartContext";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <GoogleOAuthProvider clientId="48260052822-f8mir2j7dhdo08subeqmn1gdj9q9bp0q.apps.googleusercontent.com">
        <AuthProvider>
          <CartProvider>
            <AdminProvider>
              <ProductProvider>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Product/:id" element={<Item />} />
                    <Route path="*" element={<Notfound />} />
                    <Route path="/Cart" element={<CartTotal />} />
                  </Route>
                  <Route path="/dashboard" element={<AdminLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Route>
                  {/* <Route path="/admin/dashboard" component={MasterLayout} /> */}
                </Routes>

                {/* <Route path="/dashboard" element={<DashLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/posts" element={<DPosts />} />
                <Route path="/dashboard/reports" element={<DReports />} />

                <Route path="/dashboard/users" element={<DUsers />} />

                <Route path="/dashboard/products" element={<DProducts />} />
              </Route> */}
              </ProductProvider>
            </AdminProvider>
          </CartProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
