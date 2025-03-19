import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { useNavigate } from "react-router";
import { IoHome } from "react-icons/io5";

const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-[15%] bg-gray-900 text-white p-4 fixed">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <MdOutlineDashboard className="text-3xl text-blue-500" />
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md"
        >
          <MdOutlineDashboard className="text-xl" />
          Dashboard
        </button>
        <button
          onClick={() => navigate("/addfooddata")}
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md"
        >
          <BiTask className="text-xl" />
          Add Food
        </button>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md"
        >
          <AiOutlineUser className="text-xl" />
          Users
        </button>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md"
        >
          <FiSettings className="text-xl" />
          Settings
        </a>
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-6 left-4 w-[85%]">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 hover:bg-gray-700 p-2 rounded-md"
        >
          <IoHome className="text-xl" />
          Go to Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 hover:bg-gray-700 p-2 rounded-md"
        >
          <AiOutlineLogout className="text-xl" />
          Logout
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default AdminSidebar;
