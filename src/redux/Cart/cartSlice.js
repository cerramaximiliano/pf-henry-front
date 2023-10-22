import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: {},
  },
  reducers: {
    addProduct: (state, action) => {
      const { id, product } = action.payload;
      if (state.productsInCart[id]) {
        state.productsInCart[id].quantity += 1;
      } else {
        state.productsInCart[id] = { ...product, quantity: 1 };
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      delete state.productsInCart[id];
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (state.productsInCart[id]) {
        state.productsInCart[id].quantity = quantity;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProductQuantity } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
