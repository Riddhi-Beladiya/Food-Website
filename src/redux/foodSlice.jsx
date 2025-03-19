import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || null,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      localStorage.setItem("selectedProduct", JSON.stringify(action.payload)); // Persisting data
    },
  },
});

export const { setSelectedProduct } = foodSlice.actions;
export default foodSlice.reducer;
