import React from "react";
import { CiStar } from "react-icons/ci";

const Review = () => {
  return (
    <>
      <div>
        <h2 className="my-4 p-1 border-red-400 border-b-2 inline-block ">
          Filter by Price
        </h2>
      </div>

      <div className="w-full max-w-xs">
        <div className="flex justify-center gap-2 p-2 border rounded-lg hover:border-red-400 bg-white">
          <img
            src="https://fresheat-react.vercel.app/assets/img/shop/recentThumb1_1.png"
            alt="roti"
            className="w-10 h-10"
          />
          <div>
            <p>Ruti With Beef Slice</p>
            {/* Display 5 CiStar icons */}
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} className="text-xl" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">35$</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 p-2 mt-4 border rounded-lg hover:border-red-400 bg-white">
          <img
            src="https://fresheat-react.vercel.app/assets/img/shop/recentThumb1_2.png"
            alt="fast-food"
            className="w-10 h-10"
          />
          <div>
            <p>Fast Food Combo</p>
            {/* Display 5 CiStar icons */}
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} className="text-xl" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">75$</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 p-2 mt-4 border rounded-lg hover:border-red-400 bg-white">
          <img
            src="https://fresheat-react.vercel.app/assets/img/shop/recentThumb1_4.png"
            alt="Pasta"
            className="w-10 h-10"
          />
          <div>
            <p>Chiness Pasta</p>
            {/* Display 5 CiStar icons */}
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} className="text-xl" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">45$</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 p-2 mt-4 border rounded-lg hover:border-red-400 bg-white">
          <img
            src="https://fresheat-react.vercel.app/assets/img/shop/recentThumb1_3.png"
            alt="Salad"
            className="w-10 h-10"
          />
          <div>
            <p>divicious Salad</p>
            {/* Display 5 CiStar icons */}
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} className="text-xl" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">55$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
