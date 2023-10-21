import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/products",
      },
    });
  };

  return (
    <button className="block px-4 py-2 text-sm  text-white hover:text-darkorange" onClick={handleLogin}>
      Log In
    </button>
  );
};