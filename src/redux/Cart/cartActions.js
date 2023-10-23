import { addProduct, deleteProduct } from './cartSlice';

export const addProductToCart = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const deleteProductToCart = (product) => (dispatch) => {
  dispatch(deleteProduct(product));
};





