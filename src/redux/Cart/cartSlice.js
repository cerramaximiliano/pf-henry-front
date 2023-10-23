// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      //       state.productsInCart
      //  = [...state.productsInCart, ...action.payload];
      //         console.log(state.productsInCart)
      state.productsInCart.push(action.payload);
    },
    deleteProduct: (state, action) => {
      
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
    },
    addSameUnity: (state, action) => {
      const { id } = action.payload;
      const product = state.productsInCart.find((product) => product.id === id);
      if (product) {
        product.quantity += 1;
      }
    },
  },
});

export const { addProduct, deleteProduct, multiplyProduct } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
