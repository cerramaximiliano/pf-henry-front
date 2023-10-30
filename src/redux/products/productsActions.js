import axios from "axios";
import {
  getProductById,
  getProductsByFilter,
  addProduct,
} from "./productSlice.js";

const URLBASE = import.meta.env.VITE_URL_BASE;

export const getProductId = (id) => {
  return (dispatch) => {
    axios
      .get(`${URLBASE}/products/${id}`)
      .then((res) => {
        dispatch(getProductById(res.data));
      })
      .catch((e) => console.log(e));
  };
};

export const getProductFiltered = (filters) => {
  const query = Object.entries(filters)
    .map(([key, value]) => {
      if (value) {
        return `${key}=${value}`;
      }
      return "";
    })
    .filter(Boolean)
    .join("&");
  return async (dispatch) => {
    console.log("la actoin: " + query);
    await axios
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

export const deleteProduct = (id) => {
  return async (dispatch) => {
    axios
      .put(`${URLBASE}/products/desactivate/${id}`)
      .catch((e) => console.log(e))
  }
}
