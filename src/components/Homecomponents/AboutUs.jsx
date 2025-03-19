import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[400px] overflow-hidden bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[50%] h-[300px] flex flex-col items-center justify-center shadow-lg rounded-lg space-y-3">
        <h1 className="text-yellow-600 text-xl font-bold uppercase">About Us</h1>
        <p className="text-black font-bold text-center w-[400%] text-3xl ">
          Variety of Flavours From Indian Cuisine
        </p>
        <span className="text-center w-[70%]">
          It is a long established fact that a reader will be distracted the
          readable content of a page when looking at layout the point
          established fact{" "}
        </span>
        <div className="flex  justify-center gap-3 items-center  bg-red-500 text-white w-[70%] py-2 rounded-lg  transition duration-300 hover:bg-blue-500 mt-2">
          <button onClick={() => navigate("/contact")} className="">Order Now</button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
