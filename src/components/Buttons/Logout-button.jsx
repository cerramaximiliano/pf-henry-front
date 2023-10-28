import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useLocation } from "react-router-dom";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <>
    {pathname === '/callback' 
    ? <button  className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100" onClick={handleLogout}>
      Back to Home
    </button>
    : <button  className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100" onClick={handleLogout}>
      Log Out
    </button>}
    </>
  );
};