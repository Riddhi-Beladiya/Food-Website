import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";


const Dishes = () => {
  const navigate = useNavigate();

  const dishData = [
    {
      id: 1,
      image:
        "https://eduauraapublic.s3.ap-south-1.amazonaws.com/webassets/images/blogs/indian-food-nutrition.jpg",
      alt: "dish-1",
      title: "Idli-Samber",
      description: "The Registration Fee.",
      price: "$20.12",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_30,w_750/f_auto/south-indian-food-phplHtYCF",
      alt: "dish-2",
      title: "South-Indian",
      description: "The Registration Fee.",
      price: "$20.12",
    },
    {
      id: 3,
      image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Jalebi.jpg",
      alt: "dish-3",
      title: "Jalebi",
      description: "The Registration Fee.",
      price: "$20.12",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjw33BA7wqGozZbb7WVBOdutBMzw8pqiUAqg&s",
      alt: "dish-4",
      title: "Bhajiya",
      description: "The Registration Fee.",
      price: "$20.12",
    },
    {
      id: 5,
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/DSC06868_20190101160258.JPG",
      alt: "dish-5",
      title: "Dabeli",
      description: "The Registration Fee.",
      price: "$20.12",
    },
  ];

  return (
    <div className="pt-10">
      {/* Heading Section */}
      <div className="text-center text-3xl mt-8">
        <h1 className="text-yellow-600 text-xl font-bold uppercase mt-5">
          Popular Dishes
        </h1>
        <p className="text-black text-2xl font-bold mt-3">Best Selling Dishes</p>
      </div>

      {/* Grid Layout for Dishes */}
      <div className="grid grid-cols-3 gap-10 justify-center p-10">
        {dishData.map((dish) => (
          <div key={dish.id} className="w-full  transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg shadow-lg">
            <div className="relative group">
              {/* Image with Hover Effect */}
              <img
                src={dish.image}
                alt={dish.alt}
                className="h-[200px] w-full object-cover rounded-lg"
              />

              {/* Icons - Positioned Absolute */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Heart Icon */}
                <FaRegHeart className="bg-red-400 text-3xl p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-red-400" />
                
                {/* Cart Icon - Bottom to Up Animation */}
                <IoCartOutline className="bg-red-400 text-3xl p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-red-400 hover:translate-y-[-5px]" />
              </div>
            </div>

            {/* Dish Details */}
            <div className="text-center my-3">
              <p className="text-xl font-bold uppercase">{dish.title}</p>
              <p className="text-sm">{dish.description}</p>
              <p className="font-bold">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center ">
      <button onClick={() => navigate("/shop")} className=" text-center bg-red-400 flex  justify-center mx-auto gap-2 items-center text-white rounded-lg  mb-4  px-10 py-3 hover:bg-blue-400">View Items         <FaArrowRight />
       </button>
      </div>
    </div>
  );
};

export default Dishes;
