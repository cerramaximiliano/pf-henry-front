import { addProduct, deleteProduct } from './cartSlice';
import { updateProductQuantity as updateProductQuantityAction } from './cartSlice';
export const addProductToCart = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const deleteProductToCart = (product) => (dispatch) => {
  dispatch(deleteProduct(product));
};  

export const updateProductQuantity = (product, newQuantity) => (dispatch) => {
  dispatch(updateProductQuantityAction({ product, newQuantity }));
};

 