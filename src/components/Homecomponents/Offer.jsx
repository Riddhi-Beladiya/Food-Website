import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const Offer = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[500px] bg-gray-100 flex items-center justify-center">
      <div className="bg-black w-[70%] h-[400px] flex flex-col justify-center shadow-lg rounded-lg relative">
        <div className=" w-full h-full relative">
          <img
            src="https://fresheat-react.vercel.app/assets/img/timer/timerThumb1_1.png"
            alt="offer-1"
            className="absolute bottom-0 left-[20%] transform -translate-x-1/2 w-[300px] h-[300px] object-contain"
          />
          <div className="absolute top-[10%] text-white h-[70%] py-5 w-[50%] right-[10%] bg-gray-600">
              <h1 className="text-yellow-600 text-xl text-center font-bold uppercase">
                About Us
              </h1>
              <p className="text-white text-center font-bold  text-3xl ">
                Get 50% Discount Every Item
              </p>
              <div className="flex justify-around my-4 ">
                <div className="bg-orange-400 p-3 px-5">
                    <p className="border-b p-2">326</p>
                    <span className="uppercase">days</span>
                </div>
                <div className="bg-orange-400 p-3 px-5">
                    <p className="border-b p-2">11</p>
                    <span className="uppercase">hrs</span>
                </div>
                <div className="bg-orange-400 p-3 px-5">
                    <p className="border-b p-2">60</p>
                    <span className="uppercase">mins</span>
                </div>
                <div className="bg-orange-400 p-3 px-5">
                    <p className="border-b p-2">26</p>
                    <span className="uppercase">secs</span>
                </div>
              </div>
              <div className="flex justify-center gap-3 items-center   mt-2">
                        <button onClick={() => navigate("/contact")} className=" bg-red-500 flex items-center text-white py-2 rounded-lg  transition duration-300 gap-2 px-5   hover:bg-blue-500"> Order Now <FaArrowRight /></button>
                       
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
