import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router';

 const OrderFood = () => {
  const navigate = useNavigate();
  const foodImages = [
    "https://img.freepik.com/free-photo/side-close-up-view-vegetables-lemon-oil-onion-garlic-bell-peppers-tomatoes-with-pedicels_140725-73605.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-photo/side-close-up-view-vegetables-lemon-oil-onion-garlic-bell-peppers-tomatoes-with-pedicels_140725-73605.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-photo/side-close-up-view-vegetables-lemon-oil-onion-garlic-bell-peppers-tomatoes-with-pedicels_140725-73605.jpg?semt=ais_hybrid"
  ]
  return (
    <div className="flex justify-between gap-4 px-5 mb-4">
      {foodImages.map((image, index) => (
        <div key={index} className='relative' >
          <img src={image} alt={`food-${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
          <div className='absolute  top-20 left-10 '>
            <p className='text-red-600 font-bold py-1 text-sm'>ON THIS WEEK</p>
            <h3 className='text-blue-500 font-bold text-2xl'>SPICY FRIED DAL</h3>
            <span className='text-black text-sm'>limits Time Offer</span>
            <br></br>
            <div className='flex justify-center gap-3 items-center  bg-red-500 text-white w-[70%] py-2 rounded-lg transition duration-300 hover:bg-blue-500 mt-2'>
            <button onClick={() => navigate("/contact")} className=''>Order Now</button>
            <FaArrowRight />
            </div>
        </div>
        </div>
      ))}
    </div>
  );
};
export default OrderFood;