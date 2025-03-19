import React from "react";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const AddReview = () => {
  return (
    <div className="bg-white py-10 p-5">
      <div className="bg-gray-100 rounded-lg shadow p-10">
        <h2 className="text-3xl font-bold">Add A Review</h2>
        <p className="py-5">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="flex gap-8 py-5">
          <p>Rate this product? *</p>
          <div className="flex text-red-500">
            {[...Array(5)].map((_, index) => (
              <CiStar key={index} className="text-xl" />
            ))}
          </div>
        </div>
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
                <button
                  type="submit"
                  className="bg-orange-400 p-2 rounded-r-md hover:bg-orange-500 transition duration-300"
                >
                  <FaRegUser className="text-white text-xl" />
                </button>
              </form>
            </div>

            <div className="w-full ">
              <form className="flex bg-white rounded-xl p-2">
                <input
                  type="text"
                  placeholder="Your Email "
                  name="search"
                  className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-orange-400 p-2 rounded-r-md hover:bg-orange-500 transition duration-300"
                >
                  <MdOutlineMailOutline className="text-white text-xl" />
                </button>
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
              <button
                type="submit"
                className="bg-orange-400 p-2 rounded-r-md hover:bg-orange-500 transition duration-300"
              >
                <FaPen className="text-white text-xl" />
              </button>
            </form>
          </div>
          <div className="p-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="privacyPolicy"
              className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-orange-500"
            />
            <p>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
        </div>
        <div>
          <button className="text-white bg-red-500 hover:bg-blue-500 border-1 p-4 flex gap-2">
            Post a Comment
            <FaArrowRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
