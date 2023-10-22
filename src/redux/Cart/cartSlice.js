// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productsInCart.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
    },
    /* addSameUnity: (state, action) => {
      const { id } = action.payload;
      const product = state.productsInCart.find((product) => product.id === id);
      if (product) {
        product.quantity += 1;
      }
    }, */
    updateProductQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const product = state.productsInCart.find((product) => product.id === id);
      if (product) {
        product.quantity = newQuantity;
      }
    },
  },
});

export const { addProduct, deleteProduct, addSameUnity, updateProductQuantity } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
