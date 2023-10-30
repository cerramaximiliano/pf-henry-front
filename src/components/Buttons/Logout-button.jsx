import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const LogoutButton = () => {
  const { user, logout } = useAuth0();
  const { pathname } = useLocation();
  const { productsInCart } = useSelector((state) => state.cart)

  const handleLogout = () => {
    // localStorage.clear()
    localStorage.setItem("cart", "{}");
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button  className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100" onClick={handleLogout}>
      Log Out
    </button>
  );
};