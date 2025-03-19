import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Userinfo = () => {
  return (
    <div className="p-10">
      {/* Wrapper to keep everything in one row */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 bg-gray-100 px-5 py-10 rounded-lg shadow-md">
        
        {/* Phone */}
        <div className=" items-center p-8 rounded-lg  bg-white shadow">
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-2xl font-semibold ">Phone</h3>
            <p className="text-gray-600">+123 (5246) 2356 65</p>
          </div>
        </div>

        {/* Email */}
        <div className="items-center  p-8  bg-white rounded-lg shadow">
          <FaEnvelope className="text-red-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">info.needhelp@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className=" items-center  p-8 bg-white rounded-lg shadow">
          <FaMapMarkerAlt className="text-green-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-600">8502 Preston Rd, Inglewood, Maine</p>
          </div>
        </div>

        {/* Opening Time */}
        <div className="items-center  p-8 bg-white rounded-lg shadow">
          <FaClock className="text-yellow-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Opening Time</h3>
            <p className="text-gray-600">Mon - Fri 09:00 AM - 05:00 PM</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Userinfo;
