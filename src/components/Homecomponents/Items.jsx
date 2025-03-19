import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Items = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(
          "https://fooddata-f715f-default-rtdb.firebaseio.com/fooddata.json"
        );
        const data = await response.json();

        if (data) {
          const itemsArray = Array.isArray(data) ? data : Object.values(data);
          setFoodItems(itemsArray.slice(0,6)); // Limit to 10 items
        }
      } catch (error) {
        setError("Failed to fetch food data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <>
      <div className="text-center text-3xl font-bold">
        <h1 className="text-yellow-600 text-xl font-bold uppercase">
          Best Food
        </h1>
      </div>

      {loading ? (
        <p className="text-center text-lg mt-5">Loading food items...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-5">{error}</p>
      ) : (
        <div className="overflow-hidden px-5 mb-4">
          <Slider
            {...settings}
            className="slider-container mx-auto my-10 px-10 flex"
          >
            {foodItems.map((item) => (
              <div key={item.id} className="py-6   px-2">
                <div className=" ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[90%]  text-center mx-auto h-[200px] "
                  />
                </div>
                <div className="text-center py-2">
                  <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                  <p className="text-sm">The Registration Fee.</p>
                  <span className="font-bold">
                    ${Number(item.price).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Items;
