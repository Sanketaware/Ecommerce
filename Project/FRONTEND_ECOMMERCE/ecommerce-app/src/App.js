import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Men from "./pages/Men";
import Women from "./pages/Women";
import OurStore from "./pages/OurStore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import RegisterSeller from "./pages/RegisterSeller";
import SingleProduct from "./components/SingleProduct";
import Cart from "./pages/Cart";
import SellerDashboard from "./pages/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import SellerLogin from "./pages/SellerLogin";
import AddProduct from "./pages/AddProduct";
import AllSellers from "./pages/AllSellers";
import AllCustomers from "./pages/AllCustomers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="our-store" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="seller-login" element={<SellerLogin />} />
            <Route path="cart" element={<Cart />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="register-seller" element={<RegisterSeller />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="seller-dashboard" element={<SellerDashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="all-sellers" element={<AllSellers />} />
            <Route path="all-customers" element={<AllCustomers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
