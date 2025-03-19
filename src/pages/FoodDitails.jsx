import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import AddReview from "../components/Shopcomponents/AddReview";
import FoodCart from "../components/Shopcomponents/FoodCart";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import CustomerReview from "../components/FoodDitails.jsx/CustomerReview"
const FoodDetails = () => {
  const selectedProduct = useSelector((state) => state.food.selectedProduct);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
const productId = params.get("uniqueId");

  const [product, setProduct] = useState(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    return selectedProduct || (storedProduct ? JSON.parse(storedProduct) : null);
  });
  

  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    }
  }, [selectedProduct]);

  if (!product || product.uniqueId.toString() !== productId) {
    return (
      <div className="text-center text-red-500 mt-10">No product selected</div>
    );
  }

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch to Redux store
    
    // Show success toast message
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  
  return (
    <div className="container mx-auto  pt-10">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Shop Banner */}
      <div className="relative">
        <img
          src="https://t4.ftcdn.net/jpg/02/92/16/87/240_F_292168788_kdZavR8oHlZbs2FH0hTR4r8bEu5FWne6.jpg"
          alt="shop"
          className="w-full max-h-100"
        />
        <div className="absolute top-[50%] w-full text-center">
          <h2 className="text-5xl text-red-500 font-bold">SHOP DETAILS</h2>
        </div>
      </div>

      {/* Product Details */}
      <div className=" bg-gray-100 p-6 rounded-lg shadow-lg m-6">
        <div className="flex justify-center ">
          {/* Product Image with Rotating Border */}
          <div className="w-[50%] relative flex justify-center items-center ">
            <div className="absolute border-2 border-dashed border-red-500 w-[70%] h-[90%]  rounded-full animate-[spin_50s_linear_infinite]"></div>
            <img
              src={product.image}
              alt={product.name}
              className="w-[67%] p-2 h-[90%] rounded-full shadow-lg"
            />
          </div>

          {/* Product Information */}
          <div className="ml-6 w-[50%] bg-gray-200 px-3 py-4 ">
            <div className="border-b py-3 border-gray-300 rounded-2xl">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-red-500 text-lg font-semibold mt-2">
                {product.price}
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <CiStar key={index} className="text-xl" />
                ))}
              </div>
              <p className="text-gray-500">(2 customer reviews)</p>
            </div>

            {/* Description */}
            <p className="py-3 text-gray-700">
              Aliquam hendrerit a augue in suscipit. Etiam aliquam massa quis
              mauris commodo venenatis. Ligula commodo leez sed blandit
              convallis dignissim. Onec vel pellentesque neque.
            </p>

            {/* Quantity Counter */}
            <div className="flex items-center mt-4 space-x-3">
              <span className="text-lg font-semibold">Quantity:</span>
              <button
                onClick={decreaseQuantity}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-all"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-all"
              >
                +
              </button>
            </div>
            <div className="flex gap-8 p-8 ">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-3 bg-red-400 text-white hover:bg-orange-400 px-3 py-2"
              >
                Add to Cart
                <IoCartSharp className="text-lg" />
              </button>

              <button className="flex items-center gap-3 bg-orange-400 text-white hover:bg-black px-3 py-2">
                Add to Whishlist
                <FaHeart className="text-lg" />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <h2 className="items-center font-bold font-2xl">
                Share With Friends
              </h2>
              <FaFacebook className="hover:text-red-500 text-2xl" />
              <TbBrandYoutube className="hover:text-red-500 text-2xl" />
              <FaSquareXTwitter className="hover:text-red-500 text-2xl" />
              <IoLogoLinkedin className="hover:text-red-500 text-2xl" />
            </div>
          </div>
        </div>
        <div className=" py-5 border-b">
          <h3 className="font-bold text-3xl p-3">Product Description</h3>
          <p className="px-3">
            Indulge in the rich flavors of our Spicy Grilled Chicken Burger,
            crafted to satisfy your taste buds with every bite. Made with a
            perfectly grilled, juicy chicken patty seasoned with a blend of
            aromatic spices, this burger is topped with crisp lettuce, fresh
            tomatoes, and creamy mayo, all sandwiched between a soft, toasted
            brioche bun.
          </p>
          <p className="px-3">
            Our signature recipe ensures a balance of heat and flavor, making it
            a delightful choice for spice lovers. Whether you enjoy it with a
            side of crispy fries or a refreshing cold beverage, this burger
            guarantees a fulfilling and mouthwatering experience. Freshly
            prepared with high-quality ingredients, it's the perfect choice for
            a delicious meal on the go.
          </p>
        </div>
        <div>
          <CustomerReview/>
        </div>
        <div>
          <AddReview />
        </div>
        <div>
          <FoodCart />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
