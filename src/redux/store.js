import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";

export default configureStore({
  reducer: { products: productsReducer },
});
