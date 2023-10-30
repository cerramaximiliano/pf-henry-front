import { useAuth0 } from "@auth0/auth0-react";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo(1).png";
import SearchBar from "../SearchBar/SearchBar";
import { SignupButton } from "../Buttons/Signup-button";
import { LogoutButton } from "../Buttons/Logout-button";
import Cart from "../Cart/Cart";
import Profile from "../../assets/Profile.png";
import { LoginButton } from "../Buttons/Login-button";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { pathname } = useLocation();
  const { isAuthenticated, user } = useAuth0();
  const [toggleCart, setToggleCart] = useState(false);
  const { user_detail } = useSelector(
    (state) => state.users
  );

  const desplegarCart = () => {
    setToggleCart(!toggleCart);
  };

  // Agregar este efecto para desplazar hacia arriba al cambiar de página
  useEffect(() => {
    console.log(user_detail);
    window.scrollTo(0, 0); // Scroll al principio de la página
  }, [pathname]); // Ejecutar cuando cambie la ruta

  return (
    <div className="sticky z-10 top-0 bg-whiteFred-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/home">
                <img src={Logo} alt="" className="ml-[0px] mt-[15px] h-[80px] w-[120px]" />
              </NavLink>
            </div>
            <div className="hidden font-bayon-bold sm:ml-6 sm:flex space-x-[80px]">
              {pathname !== "/" && (
                <NavLink
                  to="/home"
                  className="text-blackFred-300 hover:text-orangeFred-300"
                >
                  Home
                </NavLink>
              )}
              {pathname !== "/" && (
                <NavLink
                  to="/products"
                  className="text-blackFred-300 hover:text-orangeFred-300"
                >
                  Products
                </NavLink>
              )}
              {pathname !== "/" && (
                <NavLink
                  to="/aboutus"
                  className="text-blackFred-300 hover:text-orangeFred-300"
                >
                  About Us
                </NavLink>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <SearchBar />
            <button
              onClick={desplegarCart}
              type="button"
              className="ml-4 relative bg-redFred-100 py-2 px-4 rounded-sm text-blackFred-300 hover:border-transparent"
            >
              <ShoppingCartIcon className="h-4 w-4" aria-hidden="true" />
              {toggleCart ? <Cart /> : null}
            </button>
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="relative flex rounded-none py-[2.5px] px-[24px] h-[39] bg-redFred-100 text-sm">
                  <img className="h-8 w-8 rounded-full" src={Profile} alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-whiteFred-100 py-1 rounded-md shadow-lg">
                  <div>
                    {!isAuthenticated ? (
                      <>
                        <SignupButton />
                        <LoginButton />
                      </>
                    ) : (
                      <>
                        <LogoutButton />
                        
                          <NavLink
                            to={`/myaccount/${user_detail._id}`}
                            className="ml-4 text-blackFred-300 hover:text-orangeFred-300"
                          >
                            My Account
                          </NavLink>
                        
                      </>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
