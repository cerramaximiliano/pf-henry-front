import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
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