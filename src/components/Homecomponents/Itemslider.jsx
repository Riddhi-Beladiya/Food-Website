import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Itemslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800, // ⬆️ Increased for smoother effect
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // ⬆️ Set to 2s for natural transitions
    cssEase: "ease-in-out", // ✅ Added smooth transition effect
    pauseOnHover: false, // ✅ Prevent pause when hovered
  };

  const items = [
    "BURGER",
    "GRILLED SANDWICH",
    "PIZZA",
    "FRIED RICE",
    "IDLI-SAMBHAR",
    "CHINESE PASTA",
  ];

  return (
    <div className="slider-container overflow-hidden text-gray-400 text-6xl text-center my-7 font-bold">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="object-cover w-full hover:text-red-400">
            <h2 className="hover:border-b-2 border-gray-400 px-4 py-2 w-fit mx-auto rounded-lg hover:border-red-400 transition-all duration-300 ease-in-out">
              {item}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Itemslider;
