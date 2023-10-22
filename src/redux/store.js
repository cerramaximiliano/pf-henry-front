import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";

import usersReducer from './users/userSlice';


export default configureStore({
  reducer: { products: productsReducer, users: usersReducer },
});
