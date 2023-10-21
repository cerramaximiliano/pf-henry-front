import axios from "axios";
import{
    addProduct,
    deleteProduct,
} from './cartSlice.js'

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch(addProduct(product));
  };
};

export const deleteProductToCart = (productId) => {
  return (dispatch) => {
    dispatch(deleteProduct(productId));
  };
};



  //delete eliminar productos del estado global del carrito (en el carrito)
  //Agregar productos del carrito al estado global (se usa en detalle y en producto)
  // Funcion multiplicar mismo producto (producto en si ) 
