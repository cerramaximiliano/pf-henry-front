import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    detail: {},
    currentPage: "",
    totalPages: "",
    totalResults: "",
    isLoading: false,
  },
  reducers: {
    getProductById: (state, action) => {
      state.detail = action.payload;
    },
    getProductsByFilter: (state, action) => {
      state.totalPages = action.payload.totalPages;
      state.products = action.payload.products;
      state.currentPage = action.payload.currentPage;
      state.totalResults = action.payload.totalResults;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getProductById,
  getProductsByFilter,
  addProduct,
  startLoading,
  stopLoading,
} = productSlice.actions;

const productsReducer = productSlice.reducer;
export default productsReducer;
