import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import cartReducer from "./Cart/cartSlice";

export default configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
});
