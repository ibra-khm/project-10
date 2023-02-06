import React, { useState, Fragment, useContext, useEffect } from "react";
import {
  Navbar,
  Dropdown,
  Avatar,
  Toast,
  Flowbite,
  DarkThemeToggle,
} from "flowbite-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthContext";
import RegistrationPortal from "./regestration/RegestrationPortal";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import swal from "sweetalert";

export default function Header({ item }) {
  const { cart, setCart, addToCart, updateCart, deleteFromCart } =
    useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);

  const path = useLocation();
  const { showPortal, setShowPortal, user, token, logout, cookies } =
    useContext(AuthContext);
  console.log(showPortal);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let newSubtotal = 0;
    cart?.forEach((item) => {
      newSubtotal += item.product.price * item.quantity;
    });
    setSubtotal(newSubtotal);
  }, [cart]);

  const handleIncrease = (id, quantity) => {
    // increase the quantity by 1
    updateCart(id, quantity + 1);
  };

  const handleDecrease = (id, quantity) => {
    // decrease the quantity by 1
    updateCart(id, quantity - 1);
    if (quantity === 0) {
      deleteFromCart(id);
    }
  };

  return (
    <>
      <div className="bg-creme max-w-screen border-b lg:-pt-[87px]  backdrop-blur-sm md:-pt-16 -pt-16 bg-opacity-80 dark:bg-opacity-80   border-gray-600 w-full z-10 fixed dark:text-white dark:bg-gray-800 sm:bg-none ">
        <Navbar
          fluid={true}
          rounded={true}
          className={
            "mx-auto bg-transparent dark:bg-transparent  max-w-[80rem] "
          }
        >
          <Navbar.Brand>
            <Link to={"/"}>
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32  rounded-lg text-2xl ">
                Partsly
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <div className="flex flex-1 items-center justify-end">
              <label className="sr-only" htmlFor="search">
                Search
              </label>

              <input
                className="h-10 w-full dark:placeholder-gray-300 rounded-full border-none focus:border-brand focus:ring-brand drop-shadow-sm focus:drop-shadow-lg transform duration-200 ease-in-out  dark:bg-gray-600 pl-4 pr-10 text-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />

              <div className="ml-8 flex items-center">
                <div className="flex items-center divide-x divide-gray-300 dark:divide-gray-500 border-x border-gray-300 dark:border-gray-500">
                  {token && user ? (
                    <Dropdown
                      arrowIcon={false}
                      inline={true}
                      label={
                        <span>
                          <div className="block border-b-4 border-transparent dark:text-white p-6 hover:border-brand  transform duration-200 ease-in-out">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span className="sr-only"> Account </span>
                          </div>
                        </span>
                      }
                    >
                      <Dropdown.Header>
                        <span className="block text-sm">{user.name}</span>
                        <span className="block truncate text-sm font-medium">
                          {user.email}
                        </span>
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link to={"/Profile"}>Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to={"/Register"}>Orders</Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      {user && user?.role == "admin" ? (
                        <>
                          <Dropdown.Item>
                            <Link to={"/dashboard"}>DashBoard</Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                        </>
                      ) : null}
                      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                    </Dropdown>
                  ) : (
                    <button
                      onClick={() => {
                        setShowPortal(!showPortal);
                      }}
                      className="hidden p-5 bg-indigo lg:inline-block"
                    >
                      <span>Login</span>
                    </button>
                  )}

                  <button type="button" onClick={() => setOpen(true)}>
                    <div className="block p-6 border-b-4 border-transparent hover:border-brand">
                      <span>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <NavLink
              to={"/"}
              className="block h-16 border-b-4 border-transparent hover:border-brand transform duration-300 ease-in-out focus:border-brand leading-[4rem]  hover:text-brand"
            >
              Home
            </NavLink>

            <NavLink
              to={"/Shop"}
              className={
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-brand transform duration-300 ease-in-out focus:border-brand hover:text-brand"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/About"}
              className={
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-brand transform duration-300 ease-in-out focus:border-brand hover:text-brand"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-brand transform duration-300 ease-in-out focus:border-brand hover:text-brand"
              }
            >
              Contact
            </NavLink>
            <Flowbite>
              <DarkThemeToggle />
            </Flowbite>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <RegistrationPortal />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-800  shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2  text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cart?.map((item) => (
                                <li
                                  key={item.product.id}
                                  className="flex py-6 "
                                >
                                  <div className="h-24 w-24 flex-shrink-0  overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.product.image}
                                      className="h-full w-full object-cover object-center"
                                      alt="product"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium dark:text-creme text-gray-900">
                                        <h3>
                                          {/* <a href={product}> */}
                                          {item.product.name}
                                          {/* </a> */}
                                        </h3>
                                        <p className="ml-4">
                                          JOD {item.product.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div>
                                        <label for="Quantity" class="sr-only">
                                          Quantity
                                        </label>

                                        <div class="flex items-center border border-gray-200 divide-x divide-gray-200 rounded dark:divide-gray-800 dark:border-gray-800">
                                          <button
                                            onClick={() =>
                                              handleDecrease(
                                                item.id,
                                                item.quantity
                                              )
                                            }
                                            type="button"
                                            class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                                          >
                                            &minus;
                                          </button>

                                          <span>
                                            <input
                                              type="number"
                                              id="Quantity"
                                              value={item.quantity}
                                              class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] dark:bg-gray-900 dark:text-white sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                          </span>

                                          <button
                                            onClick={() =>
                                              handleIncrease(
                                                item.id,
                                                item.quantity
                                              )
                                            }
                                            type="button"
                                            class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            deleteFromCart(item.id)
                                          }
                                          type="button"
                                          className="font-medium text-gray-400   hover:text-yellow-300"
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

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium dark:text-gray-300 text-gray-900">
                          <p>Subtotal</p>
                          <p>JOD {subtotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to={"/Checkout"}
                            className="flex items-center justify-center rounded-md border border-transparent bg-creme px-6 py-3 text-base font-medium text-gray-600 shadow-sm hover:bg-brand"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or&nbsp;
                            <button
                              type="button"
                              className="font-medium text-indigo-500 hover:text-blue-600"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
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
      {/* <Cart/> */}
    </>
  );
}
