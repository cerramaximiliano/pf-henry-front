import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    detail: [],
    currentPage: "",
    totalPages: "",
    totalResults: "",
    query: "",
    searchByName: "",
    isLoading: false,
  },
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.totalPages = action.payload.totalPages;
      state.products = action.payload.products;
      state.currentPage = action.payload.currentPage;
      state.totalResults = action.payload.totalResults;
    },
    getProductByName: (state, action) => {
      state.products = action.payload;
    },
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setSearchName: (state, action) => {
      state.searchByName = action.payload
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
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
  addProduct,
  setCurrentPage,
  setTotalPages,
  setQuery,
  setSearchName,
  startLoading,
  stopLoading
} = productSlice.actions;

const productsReducer = productSlice.reducer;
export default productsReducer;