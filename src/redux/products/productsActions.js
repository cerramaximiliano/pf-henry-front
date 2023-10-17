import axios from "axios";
import {
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
  addProduct,
  setQuery,
  setSearchName,
  //setTotalPages,
} from "./productSlice.js";

const URLBASE = "http://localhost:3001"

export const getProducts = (page) => {
  return (dispatch) => {
    axios
      .get(`${URLBASE}/products/?page=${page}`)
      .then((res) => {
        dispatch(getAllProducts(res.data));

        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const getProductName = (name) => {
  return (dispatch) => {
    axios
      .get(`${URLBASE}/products/name?name=${name}`)
      .then((res) => {
        dispatch(getProductByName(res.data));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const getProductId = (id) => {
  return (dispatch) => {
    axios
      .get(`${URLBASE}/products/${id}`)
      .then((res) => {
        dispatch(getProductById(res.data));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const getProductFiltered = (query) => {
  return (dispatch) => {
    console.log('la actoin: ' + query);
    axios
      .get(`${URLBASE}/products?${query}`)
      .then((res) => {
        dispatch(getProductsByFilter(res.data));

        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const postProduct = (product) => {
  return (dispatch) => {
    axios
      .post(`${URLBASE}/products/add`, product)
      .then((res) => {
        dispatch(addProduct(product));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const createQuery = (query) => {
  return (dispatch) => dispatch(setQuery(query))
};

export const searchName = (name) => {
  return (dispatch) => dispatch(setSearchName(name))
}
