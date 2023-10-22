import { useAuth0 } from "@auth0/auth0-react";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { LoginButton } from "../Buttons/Login-button";
import { SignupButton } from "../Buttons/Signup-button";
import { LogoutButton } from "../Buttons/Logout-button";
import Cart from "../Cart/Cart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth0();
  const [toggleCart, setToggleCart] = useState(false);

  const desplegarCart = () => {
    toggleCart === false ? setToggleCart(true) : setToggleCart(false);
  };

  /*  const toggleCart = () => {
      setIsCartOpen(prev => !prev); // Cambiar el estado del carrito al contrario del estado actual
    } */

  return (
    <div className="sticky z-10 top-0 bg-[#121212]">
      <div>
        <Disclosure as="nav" className="sticky top-0 w-full bg-graym">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="w-8 h-auto mx-rigth-[200px]">
                      <Link to="/home">
                        <img src={Logo} alt="" className="h-[40px] w-[60px]" />
                      </Link>
                    </div>
                    <div className="hidden sm:ml-[250px] sm:block">
                      <div className="flex space-x-4">
                        <div className="absolute top-5 space-x-10">
                          {pathname !== "/" && (
                            <NavLink
                              to="/home"
                              className=" text-whiteFred-100 font-roboto-bold hover:text-orangeFred-300"
                            >
                              Home
                            </NavLink>
                          )}
                          {pathname !== "/Products" && (
                            <NavLink
                              to="/products"
                              className=" text-whiteFred-100 font-roboto-bold hover:text-orangeFred-300"
                            >
                              Products
                            </NavLink>
                          )}
                          {pathname !== "/" && (
                            <NavLink
                              to="/aboutus"
                              className=" text-whiteFred-100 font-roboto-bold hover:text-orangeFred-300"
                            >
                              About Us
                            </NavLink>
                          )}
                          {pathname !== "/" && (
                            <NavLink
                              to="/myaccount"
                              className=" text-whiteFred-100 font-roboto-bold hover:text-orangeFred-300"
                            >
                              My Account
                            </NavLink>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <SearchBar />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                    <button
                      onClick={desplegarCart}
                      type="button"
                      className="relative rounded-none bg-orangeFred-300 py-[8px] px-[24px]  text-blackFred-300 outline-none hover:border-transparent"
                    >
                      <ShoppingCartIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      {toggleCart ? <Cart/> : null}
                    </button>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-none py-[2.5px] px-[24px] h-[39] bg-orangeFred-300 text-sm">
                          <span className="absolute -inset-1.5  h-[39]" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src="" alt="" />
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-graym py-1 shadow-lg ">
                          <div className="nav-bar__buttons">
                            {!isAuthenticated && (
                              <>
                                <SignupButton/>
                                <LoginButton />
                              </>
                            )}
                            {isAuthenticated && (
                              <>
                                <LogoutButton />
                              </>
                            )}
                          </div>
                          {/* <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/login"
                                className={classNames(
                                  active ? "bg-whiteFred-300" : "",
                                  "block px-4 py-2 text-sm  text-whiteFred-300 hover:text-orangeFred-300"
                                )}
                              >
                                Log In
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-whiteFred-300" : "",
                                  "block px-4 py-2 text-sm  text-whiteFred-300 hover:text-orangeFred-300"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-whiteFred-300" : "",
                                  "block px-4 py-2 text-sm  text-whiteFred-300 hover:text-orangeFred-300"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item> */}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
