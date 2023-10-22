import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart, updateProductQuantityInCart } from "../../redux/Cart/cartActions";

export default function Cart() {
  const [open, setOpen] = useState(true);
  const { productsInCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = (productId) => {
    dispatch(deleteProductFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateProductQuantityInCart(productId, newQuantity));
  };

  useEffect(() => {
    // Handle any actions when the cart is opened or closed
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blackFred-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-[100vh] flex-col overflow-y-scroll bg-blackFred-300 shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-bebas text-whiteFred-100">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative py-[8px] px-[24px] font-bebas bg-orangeFred-300 rounded-none text-blackFred-300 outline-none hover:border-transparent"
                            onClick={handleClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root bg-blackFred-100 p-[20px]">
                          <ul role="list" className=" m-0 p-0">
                            {Object.keys(productsInCart).map((productId) => (
                              <li key={productId} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={productsInCart[productId].imageSrc}
                                    alt={productsInCart[productId].imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-monse text-whiteFred-100">
                                      <h3>
                                        <a
                                          href={productsInCart[productId].href}
                                          className="text-whiteFred-100 hover:text-orangeFred-300"
                                        >
                                          {productsInCart[productId].title}
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-white-300">
                                      Quantity{" "}
                                      <select
                                        value={productsInCart[productId].quantity}
                                        onChange={(e) => handleQuantityChange(productId, e.target.value)}
                                        onKeyPress={(e) => {
                                          if (e.key === "Enter") {
                                            e.preventDefault();
                                          }
                                        }}
                                      >
                                        {[...Array(21).keys()].map((value) => (
                                          <option key={value} value={value}>
                                            {value}
                                          </option>
                                        ))}
                                      </select>
                                    </p>


                                    <div className="flex">
                                      <button
                                        onClick={() => handleDeleteClick(productId)}
                                        type="button"
                                        className="font-bebas py-[8px] px-[24px] rounded-none bg-orangeFred-300 text-blackFred-300 outline-none hover:border-transparent "
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className="text-whiteFred-300">Subtotal</p>
                        <p className="text-whiteFred-300">$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-whiteFred-300">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div>
                        <a
                          href="#"
                          className="flex items-center justify-center font-bebas py-[8px] px-[24px] rounded-none bg-orangeFred-300 text-blackFred-300 outline-none hover:border-transparent"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex place-content-evenly text-center text-sm text-whiteFred-300">
                        <p>or</p>
                        <button
                          type="button"
                          className="font-bebas py-[8px] px-[24px] rounded-none bg-orangeFred-300 text-blackFred-300 outline-none hover:border-transparent"
                          onClick={handleClose}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
