
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import FoodDetails from "./pages/FoodDitails";
import AddCartPage from "./pages/AddCartPage";
import FoodMenu from "./pages/FoodMenu";
import ContactUsPage from "./pages/ContactUsPage";
import Dishes from "./components/Homecomponents/Dishes";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Homecomponents/Footer";
import AdminHeader from "./components/DashboardComponent.jsx/AdminHeader";
import AddFoodData from "./components/DashboardComponent.jsx/AddFoodData";
const hideHeaderFooterRoutes = ["/login", "/register", "/dashboard", "/addfooddata"];
const showHeaderFooterRoutes = ["/","/home", "/shop", "/cart","/foodmenu", "/contact","/fooddetails","/dish"];

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {hideHeaderFooterRoutes.includes(currentPath) && <AdminHeader />}
      {showHeaderFooterRoutes.includes(currentPath) && <Navbar />}

      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/fooddetails" element={<FoodDetails />} />
        <Route path="/cart" element={<AddCartPage />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/dish" element={<Dishes />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/addfooddata" element={<AddFoodData />} />

        
      </Routes>
      {showHeaderFooterRoutes.includes(currentPath) && <Footer />}

    </>
  );
}

export default App;