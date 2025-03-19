import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const AddCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="max-w-3xl mx-auto p-6 pt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty. Start adding products!</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white">
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />

              {/* Product Info */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">Quantity: <span className="font-semibold">{item.quantity}</span></p>
                <p className="text-green-600 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>

              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCartPage;
