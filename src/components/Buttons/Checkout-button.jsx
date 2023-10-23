import axios from "axios";

export const CheckoutButton = ({ products, totalPrice }) => {
  const URLBASE = import.meta.env.VITE_URL_BASE;

  const handleCheckout = async ({ products, totalPrice }) => {
    const order = { products, totalPrice };
    console.log(order);
    try {
      const { data } = await axios.post(
        `${URLBASE}/payment/create-checkout-session`,
        order
      );
      console.log(data);
      window.open(data, "_blank");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <button
      className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100"
      onClick={() => {
        handleCheckout({ products, totalPrice });
      }}
    >
      Checkout
    </button>
  );
};