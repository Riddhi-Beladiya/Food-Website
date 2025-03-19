import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Benner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // ✅ Enable auto-play
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container overflow-hidden pb-20">

    <Slider {...settings}>
      <div className='bg-red-400 object-cover w-full '>
        <img src='https://img.freepik.com/free-vector/flat-design-asian-food-facebook-template_23-2150057871.jpg'
         alt='img-1'
         className='object-cover w-full h-[400px]'
        />
       
      </div>
      <div>
        <img src ='https://static.vecteezy.com/system/resources/thumbnails/000/701/479/small_2x/elegant-food-social-media-and-web-banner.jpg'
        alt='img-2'
        className='object-cover w-full h-[400px]'
        />
        
      </div>
      <div>
        <img src='https://graphicsfamily.com/wp-content/uploads/edd/2022/02/Free-Food-Advertising-Banner-Template.jpg'
        alt='img-3'
        className='object-cover w-full h-[400px]'
        />
      
      </div>
    </Slider>
    </div>
  )
};

export default Benner;  
