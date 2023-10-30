import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    const user_cart = localStorage.getItem("user-cart")
    const cartFromLocalStorage = user_cart !== 'undefined' ? JSON.parse(user_cart) : {};

    await loginWithRedirect({
      appState: {
        returnTo: "/products",
      },
    });
  };

  return (
    <button className="block px-4 py-2  mt-2 text-sm ml-2 w-[180px]  text-white hover:text-orangeFred-100" onClick={handleLogin}>
      Log In
    </button>
  );
};