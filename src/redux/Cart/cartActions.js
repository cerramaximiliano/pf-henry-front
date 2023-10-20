import axios from "axios";
import{
    addProductCart,
    deleteProductCart,
} from './cartSlice.js'

const URLBASE = import.meta.env.VITE_URL_BASE

export const postProductToCart = (product) => {
    return (dispatch) => {
      axios
        .post(`${URLBASE}/productsCart/add`, product)
        .then((res) => {
          dispatch(addProductCart(product));
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    };
  }; 
