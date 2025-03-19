import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { setSelectedProduct } from "../../redux/foodSlice";

const FoodCart = () => {
  const [foodItems, setFoodItems] = useState([]); // State to store fetched data
      const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(
          "https://fooddata-f715f-default-rtdb.firebaseio.com/fooddata.json"
        );
        const data = await response.json();
  
        if (data) {
          // Convert the object into an array while keeping unique IDs
          const itemsArray = Object.entries(data).map(([id, item]) => ({
            uniqueId: id, // Adding the uniqueId from Firebase
            ...item,
          }));
  
          setFoodItems(itemsArray);
        }
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
  
    fetchFoodData();
  }, []);
  

  const handleOrderNow = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/fooddetails?uniqueId=${product.uniqueId}`);
  };
  

  return (
    <div className="container mx-auto px-5 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <div
          key={item.uniqueId}

            className="relative bg-gray-100 mt-[80px] rounded-lg pt-3 pb-6 shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="absolute w-full -top-15 mb-10 flex justify-center">
              <div className="relative flex justify-center items-center w-[120px] h-[120px]">
                <div className="absolute w-full h-full border-2 border-dashed border-red-500 rounded-full animate-[spin_5s_linear_infinite]"></div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[90%] bg-white rounded-full object-cover h-[90%] shadow-lg border border-white"
                />
              </div>
            </div>

            <div className="px-6 pt-16 text-center">
              <h2 className="text-black font-bold text-xl">{item.name}</h2>

              <div className="flex justify-center text-yellow-500 py-2">
                {[...Array(5)].map((_, index) => (
                  <CiStar key={index} className="text-lg" />
                ))}
              </div>

              <p className="text-gray-500">The registration fee</p>
              <p className="text-red-500 font-semibold text-lg">${Number(item.price).toFixed(2)}</p>

              <button
                onClick={() => handleOrderNow(item)}
                className="mt-4 bg-red-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm transition-all duration-300"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCart;



