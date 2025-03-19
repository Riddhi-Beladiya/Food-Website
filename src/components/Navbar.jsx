import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems); // Get cart items from Redux
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-red-100 fixed z-50 w-full">
      <nav className="flex justify-between px-6 space-x-7">
        <img
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
          alt="logo"
          className="w-10"
        />
        <div className="flex justify-center gap-6 text-sm items-center">
          <button onClick={() => navigate("/home")} className="text-black hover:text-red-900">
            Home
          </button>
          <button onClick={() => navigate("/shop")} className="text-black hover:text-red-900">
            Shop
          </button>
          <button onClick={() => navigate("/foodmenu")} className="text-black hover:text-red-900">
            Food Menu
          </button>
          <button onClick={() => navigate("/contact")} className="text-black hover:text-red-900">
            Contact Us
          </button>
        </div>
        <div className="flex gap-6 items-center relative">
          <CiSearch className="text-xl hover:text-red-600" />
          <div className="relative">
            <IoCart
              onClick={() => navigate("/cart")}
              className="text-2xl cursor-pointer hover:text-red-600"
            />
            <div className="absolute -right-2 -top-2 px-2 rounded-full bg-red-400 text-white text-xs">
              {cartItems.length}
            </div>
          </div>
          <div className="relative">
            <FaUserAlt
              onClick={() => setShowMenu(!showMenu)}
              className="hover:text-red-600 cursor-pointer"
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                <button onClick={() => navigate("/dashboard")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  Dashboard
                </button>
                <button onClick={() => navigate("/login")} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200">
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
