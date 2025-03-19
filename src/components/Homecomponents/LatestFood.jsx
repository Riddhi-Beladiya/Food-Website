import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

const LatestFood = () => {
  return (
    <>
      <div className="text-center text-3xl mt-8">
        <h1 className="text-yellow-600 text-xl font-bold uppercase mt-5">
          Latest News
        </h1>
        <p className="text-black text-4xl font-bold mt-3">
          Our Latest Food News
        </p>
      </div>
      <div className="grid grid-cols-3 mx-auto justify-center my-2 gap-10 p-10 ">
        <div className="bg-gray-200 rounded-xl">
          <img
            src="https://fresheat-react.vercel.app/assets/img/blog/blogThumb1_1.jpg"
            alt="food-1"
            className="h-[250px] w-full rounded-t-xl"
          />
          <div className="p-4 ">
            <div className="flex justify-around ">
              <div className="text-center bg-red-500 p-4 ">
                <p>15</p>
                <span>DEC</span>
              </div>
              <div className="text-center p-5 flex items-center justify-center gap-2">
                <FaRegUser className="text-red-400" />

                <p>By Admin</p>
              </div>
              <div className="text-center p-5 flex items-center justify-center gap-2">
                <CiShoppingTag className="text-red-400" />
                <p>Noodles</p>
              </div>
            </div>
            <div className=" py-2">
              <h3 className="text-xl font-bold">
                Quick Cravings Unraveling Fast Food Delights
              </h3>
            </div>

            <button className="flex justify-center items-center gap-2 hover:text-red-300">
              Read more <MdArrowOutward />
            </button>
          </div>
        </div>

        <div className="bg-gray-200 rounded-xl">
          <img
            src="https://fresheat-react.vercel.app/assets/img/blog/blogThumb1_3.jpg"
            alt="food-2"
            className="h-[250px] w-full rounded-t-xl"
          />
          <div className="p-4 ">
            <div className="flex justify-around ">
              <div className="text-center bg-red-500 p-4 ">
                <p>15</p>
                <span>DEC</span>
              </div>
              <div className="text-center p-5 flex items-center justify-center gap-2">
                <FaRegUser className="text-red-400" />

                <p>By Admin</p>
              </div>
              <div className="text-center p-5 flex items-center justify-center gap-2">
                <CiShoppingTag className="text-red-400" />
                <p>Noodles</p>
              </div>
              
            </div>
            <div className=" py-2">
              <h3 className="text-xl font-bold">
                Quick Cravings Unraveling Fast Food Delights
              </h3>
            </div>

            <button className="flex justify-center items-center gap-2 hover:text-red-300">
              Read more <MdArrowOutward />
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl">
          <img
            src="https://fresheat-react.vercel.app/assets/img/blog/blogThumb1_1.jpg"
            alt="food-1"
            className="h-[250px] w-full rounded-t-xl"
          />
          <div className="p-4 ">
            <div className="flex justify-around ">
              <div className="text-center bg-red-500 p-4 ">
                <p>15</p>
                <span>DEC</span>
              </div>
              <div className="text-center p-5 flex items-center justify-center gap-2">
                <FaRegUser className="text-red-400" />

                <p>By Admin</p>
              </div>
              <div className="text-center p-5 flex items-center justify-center gap-2">
                <CiShoppingTag className="text-red-400" />
                <p>Noodles</p>
              </div>
            </div>
            <div className=" py-2">
              <h3 className="text-xl font-bold">
                Quick Cravings Unraveling Fast Food Delights
              </h3>
            </div>

            <button className="flex justify-center items-center gap-2 hover:text-red-300">
              Read more <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestFood;
