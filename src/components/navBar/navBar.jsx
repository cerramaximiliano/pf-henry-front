import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import SearchBar from "../SearchBar/SearchBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar () {
  const { pathname } = useLocation();

/*   useEffect(() => {
    // Event listener para el botón de búsqueda
    const searchButton = document.getElementById("searchButton");
    const handleButtonClick = () => {
      const searchInput = document.getElementById("searchInput");
      const searchText = searchInput.value;
      console.log(searchText);
      searchInput.value = ""; // Borra el contenido del campo de búsqueda
    };
    searchButton.addEventListener("click", handleButtonClick);

    // Event listener para la tecla "Enter" en el campo de búsqueda
     const searchInput = document.getElementById("searchInput");
    const handleEnterKey = (event) => {
      if (event.key === "Enter") {
        const searchText = searchInput.value;
        console.log(searchText);
        searchInput.value = ""; // Borra el contenido del campo de búsqueda
      }
    }; 
    searchInput.addEventListener("keydown", handleEnterKey);

    // Limpia los event listeners cuando el componente se desmonta

    return () => {
      searchButton.removeEventListener("click", handleButtonClick);
      searchInput.removeEventListener("keydown", handleEnterKey);
    };
  }, []); */

  return (
    <div>
      <div>
        <Disclosure as="nav" className="w-full bg-[#121212]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="w-8 h-auto mx-rigth-[200px]">
                      <img src={Logo} alt="" className="h-[40px] w-[60px]" />
                    </div>
                    <div className="hidden sm:ml-[250px] sm:block">
                      <div className="flex space-x-4">
                        <div className="absolute top-5 space-x-10">
                          {pathname !== "/" && (
                            <NavLink
                              to="/home"
                              className=" text-white hover:text-darkorange"
                            >
                              Home
                            </NavLink>
                          )}
                          {pathname !== "/Products" && (
                            <NavLink
                              to="/products"
                              className=" text-white hover:text-darkorange"
                            >
                              Products
                            </NavLink>
                          )}
                          {pathname !== "/" && (
                            <NavLink
                              to="/aboutus"
                              className=" text-white hover:text-darkorange"
                            >
                              About Us
                            </NavLink>
                          )}
                          {pathname !== "/Myaccount" && (
                            <NavLink
                              to="/myaccount"
                              className=" space-x-96  text-white hover:text-darkorange"
                            >
                              My acount
                            </NavLink>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <SearchBar/>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                    <a href="/cart ">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 text-darkorange hover:text-crimson"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </a>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                          <span className="absolute -inset-1.5" />
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#121212] py-1 shadow-lg">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm  text-white hover:text-darkorange"
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
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm  text-white hover:text-darkorange"
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
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm  text-white hover:text-darkorange"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
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
