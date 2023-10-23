import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { processPayment } from "../../redux/Cart/cartActions.jsx"
const CheckoutButton = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleCheckout = () => {
    const order = {
      products: productsInCart,
      totalPrice,
    };
    dispatch(processPayment(order));
  };

  return (
    <button
      className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
