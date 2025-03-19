import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../redux/foodSlice";  // Ensure this path is correct
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
  },
});
