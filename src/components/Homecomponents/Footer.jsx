import React from "react";
import { FaRegAddressCard } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoCallSharp, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black pt-10 ">
        {/* Top Address Section */}
        <div className="bg-orange-400  flex flex-wrap justify-center gap-9 rounded-3xl items-center py-7 w-[70%] mx-auto">
          {/* Address */}
          <div className="flex gap-5 items-center text-white">
            <FaRegAddressCard className="text-3xl" />
            <div>
              <p className="font-bold">Address</p>
              <p>4648 Rocky Road, Philadelphia</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex gap-5 items-center text-white">
            <FiMail className="text-3xl" />
            <div>
              <p className="font-bold">Send E-mail</p>
              <p>info@example.com</p>
            </div>
          </div>
          {/* Call */}
          <div className="flex gap-5 items-center text-white">
            <IoCallSharp className="text-3xl" />
            <div>
              <p className="font-bold">Call Emergency</p>
              <p>+88 0123 654 99</p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="text-white grid grid-cols-1 md:grid-cols-2 px-10 lg:grid-cols-4 gap-10 mt-10">
          {/* Logo & About */}
          <div>
            <img
              src="https://fresheat-react.vercel.app/assets/img/logo/logoWhite.svg"
              alt="logo"
              className="mb-5"
            />
            <p className="text-left">
              Flexibility improves movement, balance keeps things steady, and
              smooth transitions make everything flow well.
            </p>
            <div className="flex gap-5 text-3xl mt-5">
              <IoLogoFacebook className="hover:text-red-400 cursor-pointer" />
              <BsTwitterX className="hover:text-red-400 cursor-pointer" />
              <IoLogoLinkedin className="hover:text-red-400 cursor-pointer" />
              <ImYoutube className="hover:text-red-400 cursor-pointer" />
            </div>
          </div>

          <div className="text-white py-5 text-start">
            <h2 className="text-3xl p-4">Quick Links</h2>

            <div className="">
              <li className="hover:text-red-400 py-2">About Us</li>
              <li className="hover:text-red-400 py-2">Our Gallery</li>
              <li className="hover:text-red-400 py-2">Our Blogs</li>
              <li className="hover:text-red-400 py-2">FAQ'S</li>
              <li className="hover:text-red-400 py-2">Contact Us</li>
            </div>
          </div>

          <div className="text-white py-5 text-start">
            <h2 className="text-3xl p-4">Our Menu</h2>

            <div className="">
              <li className="hover:text-red-400 py-2">Burger King</li>
              <li className="hover:text-red-400 py-2">Pizza King</li>
              <li className="hover:text-red-400 py-2">Fresh Food</li>
              <li className="hover:text-red-400 py-2">Vegetable</li>
              <li className="hover:text-red-400 py-2">Dessert</li>
            </div>
          </div>

          <div className="text-white py-5 text-start">
            <h2 className="text-3xl p-4">Contact Us</h2>
            <div className="">
              <p className="p-2">Monday-Friday: 8am - 4pm</p>
              <p className="p-2">Saturday: 8am - 12am</p>
              <form className="flex bg-white rounded-xl p-2">
                <input
                  type="text"
                  placeholder="Your email address"
                  name="search"
                  className="bg-white p-2 w-full text-sm text-black border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-orange-400 p-2 rounded-r-md hover:bg-orange-500 transition duration-300"
                >
                  <FaArrowRight className="text-white text-xl" />
                </button>
              </form>
              <div className="p-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-orange-500"
                />
                <p className>
                  I agree to the{" "}
                  <span className="hover:text-red-400 cursor-pointer">
                    privacy policy.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 p-4 items-center flex justify-between ">
          <p className="text-white">© All Copyright 2024 by FreshEat</p>
          <div className=" flex gap-5">
            <button className="text-white hover:bg-blue-500 border-1 p-3">Terms & Condition</button>
            <button className="text-white hover:bg-blue-500 border-1 p-3">Privacy Policy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
