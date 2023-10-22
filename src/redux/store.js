import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import cartReducer from "./Cart/cartActions";
import usersReducer from './users/userSlice';


export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
  },
});
