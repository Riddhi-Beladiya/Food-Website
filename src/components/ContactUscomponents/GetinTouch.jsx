
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaRegUser, FaPen, FaArrowRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const GetinTouch = () => {
  return (
    <div className="bg-white py-10 p-5">
      <div className="bg-gray-100 rounded-lg shadow p-10">
        <h2 className="text-3xl font-bold">Get in Touch</h2>

        <div className="  ">
          <div className="flex p-2 justify-center gap-10 w-full ">
            <div className="w-full">
              <form className="flex bg-white rounded-xl p-2 ">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="search"
                  className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
                />
              </form>
            </div>

            <div className="w-full ">
              <form className="flex bg-white rounded-xl p-2">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="search"
                  className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
                />
              </form>
            </div>
          </div>

          <div className="flex p-2 justify-center gap-10 w-full ">
            <div className="w-full">
              <form className="flex bg-white rounded-xl p-2 ">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="search"
                  className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
                />
              </form>
            </div>

            <div className="w-full ">
              <form className="flex bg-white rounded-xl p-2">
                <input
                  type="text"
                  placeholder="Subject"
                  name="search"
                  className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
                />
              </form>
            </div>
          </div>
          <div className="p-2">
            <form className="flex bg-white rounded-xl p-2">
              <input
                type="text"
                placeholder="Write a Message"
                name="search"
                className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
              />
            </form>
          </div>
          <div className="p-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="privacyPolicy"
              className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-orange-500"
            />
            <p>
            Collaboratively formulate principle capital. Progressively evolve user
            </p>    
          </div>
          <button className="text-white bg-red-500 hover:bg-blue-500 border-1 p-4 w-[full] items-center flex  gap-2">
            SUBMIT NOW
            <FaArrowRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
