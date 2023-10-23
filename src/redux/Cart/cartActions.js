import { addProduct, deleteProduct, updateProductQuantity } from './cartslice';

export const addProductToCart = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const deleteProductFromCart = (productId) => (dispatch) => {
  dispatch(deleteProduct(productId));
};

export const updateProductQuantityInCart = (productId, quantity) => (dispatch) => {
  dispatch(updateProductQuantity({ id: productId, quantity }));
};

export const processPayment = (order) => async (dispatch) => {
  try {
    const response = await axios.post("`${URLBASE}/payment/create-checkout-session`", order);
    console.log("Pago procesado con éxito:", response.data);
  } catch (error) {
    console.error("Error al procesar el pago:", error);
  }
}

