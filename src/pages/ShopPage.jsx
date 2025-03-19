import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import PriceRangeFilter from "../components/Shopcomponents/PriceRangeFilter";
import Review from "../components/Shopcomponents/Review";
import FoodData from "../components/Shopcomponents/FoodData";
import { RiArrowDropDownLine } from "react-icons/ri";
import FoodCart from "../components/Shopcomponents/FoodCart";


const ShopPage = () => {
  return (
    <div className="pt-10">
      <div className="relative item-center ">
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/92/16/87/240_F_292168788_kdZavR8oHlZbs2FH0hTR4r8bEu5FWne6.jpg"
            alt="shop"
            className="w-full max-h-100"
          />
        </div>
        <div className="absolute top-[50%] w-full text-center">
          <h2 className="text-5xl text-red-500">SHOP</h2>
        </div>
      </div>

      <div className="flex justify-center gap-10 py-5">
        <div className="w-[20%] p-5 flex flex-col gap-5">
          {/* Search Input */}
          <div className="bg-gray-100 rounded-xl p-3">
            <h2 className="my-4 p-1 border-red-400 border-b-2 inline-block font-bold text-2xl">
              Search
            </h2>
            <div className="relative w-full max-w-xs">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="border rounded-lg text-sm p-2 w-full"
                placeholder="Search user"
              />
              {/* <IoSearch className="absolute ri  ght-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" /> */}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gray-100 rounded-xl p-3">
            <h2 className="my-4 p-1 border-red-400 border-b-2 inline-block font-bold text-2xl">
              Categories
            </h2>
            <div className="flex flex-wrap gap-4 w-full max-w-xs">
              {["Pizza", "Drink", "Cheese", "Veg", "South-Indian", "Rice"].map(
                (category, index) => (
                  <button
                    key={index}
                    className="bg-white py-2 px-4 hover:bg-red-400 hover:text-white rounded-lg"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="bg-gray-100 rounded-xl p-3">
            <h2 className="my-4 p-1 border-red-400 border-b-2 inline-block font-bold text-2xl">
              Price Range
            </h2>
            <PriceRangeFilter />
          </div>

          {/* Review Section */}
          <div className="bg-gray-100 rounded-xl p-3">
            <Review />
          </div>
        </div>

        {/* Right Section - Product List & Sorting */}
        <div className="w-[70%]  p-5 gap-5">
          <div className="flex justify-between">
            <p>Showing 1 - 6 of 30 Results</p>
            <div className="flex z-50 justify-center">
              <FoodData
                title="Default Sorting"
                options={[
                  "Sort by popularity",
                  "Sort by average rating",
                  "Sort by latest",
                  "Sort by average price:High to Low",
                  "Sort by average price:Low to High",
                ]}
              />
            </div>
          </div>
          <div className="p-7">
            <FoodCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
