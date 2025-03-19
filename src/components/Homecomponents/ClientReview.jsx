import React, { useState } from "react";
import Slider from "react-slick";
import { FiYoutube } from "react-icons/fi";
import Itemslider from "./itemslider";

const ClientReview = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="bg-black relative py-3">
        <div className="relative">
          {/* Image Thumbnail */}
          <img
            src="https://fresheat-react.vercel.app/assets/img/testimonial/testimonialThumb1_1.png"
            alt="client-image"
            
          />
          {/* YouTube Play Button */}
          <div className="absolute inset-0 flex left-50 items-center">
            <FiYoutube
              onClick={() => setIsVideoOpen(true)}
              className="cursor-pointer text-white text-9xl border rounded-full p-5 hover:text-red-500 transition duration-300"
            />
          </div>
        </div>

        {/* Video Popup Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="relative bg-white p-5 rounded-lg shadow-lg">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
                onClick={() => setIsVideoOpen(false)}
              >
                ✕
              </button>

              {/* Embedded YouTube Video */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rRid6GCJtgc?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Client Review Section */}
        <div className="absolute top-20 right-30 w-[40%] p-2 text-center">
          <h1 className="text-yellow-600 text-xl font-bold uppercase">About Us</h1>
          <p className="text-white text-3xl my-3">What our Clients Say</p>

          <div className="bg-white">
            <Slider {...settings}>
              <div className="p-5 my-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://fresheat-react.vercel.app/assets/img/testimonial/testimonialProfile1_1.png"
                    alt="review-1"
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-bold text-3xl">Albert Flores</h2>
                    <p>Web Designer</p>
                  </div>
                </div>
                <span>
                  "Absolutely loved the food! The flavors were rich, and
                  everything was fresh. The ambiance was cozy, and the service
                  was top-notch. Will definitely visit again!"
                </span>
              </div>

              <div className="p-5 my-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://fresheat-react.vercel.app/assets/img/testimonial/testimonialProfile1_1.png"
                    alt="review-1"
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-bold text-3xl">Emma R.</h2>
                    <p>Web Designer</p>
                  </div>
                </div>
                <span>
                  "Absolutely loved the food! The flavors were rich, and
                  everything was fresh. The ambiance was cozy, and the service
                  was top-notch. Will definitely visit again!"
                </span>
              </div>
            </Slider>
          </div>
        </div>
       <Itemslider />
      </div>
    </div>
  );
};

export default ClientReview;
