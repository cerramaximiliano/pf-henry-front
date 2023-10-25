import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export const CheckoutButton = ({ products, totalPrice }) => {
  const URLBASE = import.meta.env.VITE_URL_BASE;
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");

  const sendConfirmationEmail = async () => {
    try {
      const response = await axios.post(`${URLBASE}/send-email`, {
        to: email, // Usar el correo del usuario autenticado por Auth0
        subject: "Compra Exitosa",
        text: "Gracias por tu compra. El pago ha sido procesado con éxito.",
      });

      console.log(response.data.message);
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  const handleCheckout = async ({ products, totalPrice }) => {
    const order = { products, totalPrice };
    console.log(order);
    try {
      const { data } = await axios.post(
        `${URLBASE}/payment/create-checkout-session`,
        order
      );
      console.log(data);
      window.open(data, "_self");
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

