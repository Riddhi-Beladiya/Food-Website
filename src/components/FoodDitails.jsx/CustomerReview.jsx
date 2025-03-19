import React from "react";
import { CiStar } from "react-icons/ci";


const CustomerReview = () => {
  return (
    <>
      <div className="">
        <div>
          <h3 className="text-3xl font-bold py-5">02 Reviews</h3>
        </div>
        <div className="flex justify-center gap-5 border-b py-2 border-gray-300 mt-3">
          <div className="  flex items-center w-[15%]">
            <img
              src="https://fresheat-react.vercel.app/assets/img/blog/comment-author1.png"
              alt="customer-1"
            />
          </div>

          <div className="w-[100%]   px-2">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="py-1 font-bold text-xl">Masirul Islam</h1>
                <p>March 20, 2024 at 2:37 pm</p>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <CiStar key={index} className="text-xl" />
                ))}
              </div>
            </div>
            <p className="py-3 text-sm">
              I absolutely loved this dish! The flavors were rich and delicious,
              and the ingredients tasted so fresh. The texture was perfect, and
              every bite was full of flavor. The portion size was just right,
              and it was worth every penny. I would definitely order this again
              and recommend it to anyone looking for a tasty meal!
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-5 border-b py-2 border-gray-300 mt-3">
          <div className="  flex items-center w-[15%]">
            <img
              src="https://fresheat-react.vercel.app/assets/img/blog/comment-author2.png"
              alt="customer-2"
            />
          </div>

          <div className="w-[100%]   px-2">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="py-1 font-bold text-xl">Masirul Islam</h1>
                <p>March 30, 2024 at 2:37 pm</p>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <CiStar key={index} className="text-xl" />
                ))}
              </div>
            </div>
            <p className="py-3 text-sm">
              This dish was amazing! The seasoning was just right, and the
              ingredients were fresh and high-quality. It had the perfect
              balance of flavors, and the presentation was great too. The
              portion was generous, making it a great value for the price. I
              will definitely be coming back for more!
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-5 border-b py-2 border-gray-300 mt-3">
          <div className="  flex items-center w-[15%]">
            <img
              src="https://fresheat-react.vercel.app/assets/img/blog/comment-author1.png"
              alt="customer-3"
            />
          </div>

          <div className="w-[100%]   px-2">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="py-1 font-bold text-xl">Masirul Islam</h1>
                <p>March 04, 2025 at 5:37 pm</p>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <CiStar key={index} className="text-xl" />
                ))}
              </div>
            </div>
            <p className="py-3 text-sm">
              I really enjoyed this dish! The taste was fantastic, and it was
              cooked to perfection. The ingredients were fresh, and the flavors
              blended so well together. The portion size was satisfying, and it
              felt like a great deal for the price. I would highly recommend it
              to anyone looking for a delicious meal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
