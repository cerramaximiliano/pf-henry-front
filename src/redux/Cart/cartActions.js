import { addProduct, deleteProduct } from './cartSlice';

export const addProductToCart = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const deleteProductToCart = (product) => (dispatch) => {
  dispatch(deleteProduct(product));
};






  //delete eliminar productos del estado global del carrito (en el carrito)
  //Agregar productos del carrito al estado global (se usa en detalle y en producto)
  // Funcion multiplicar mismo producto (producto en si ) 
