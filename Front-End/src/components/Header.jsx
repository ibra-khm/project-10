import React, { useState, Fragment } from 'react'
import { Navbar, Dropdown, Avatar, Toast } from 'flowbite-react'
import { NavLink, Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import image from '../images/bodyparts.png'
import { Button } from 'flowbite-react'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: 'JD420.00',
    quantity: 1,
    imageSrc: { image },
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: 'JD69.00',
    quantity: 3,
    imageSrc: { image },
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]



export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='bg-creme sm:bg-none'>
        <Navbar
          fluid={true}
          rounded={true}
          className={"border-b mx-auto  w-11/12 px-2 sm:bg-creme md:bg-creme lg:bg-creme  border-gray-100"}
        >
          <Navbar.Brand>
            <Link to={'/'}>
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 pl-3 rounded-lg text-2xl">Partsly</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <div className="flex flex-1 items-center justify-end">
              <label className="sr-only" htmlFor="search"> Search </label>

              <input
                className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />


              <div className="ml-8 flex items-center">
                <div className="flex items-center divide-x divide-gray-300 border-x border-gray-100">
                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<span>
                      <div
                        className="block border-b-4 border-transparent p-6 hover:border-brand"
                      >
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
                    </span>}
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        Michael Scott
                      </span>
                      <span className="block truncate text-sm font-medium">
                        michaelscott@mail.com
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link to={'/Profile'}>Profile</Link>

                    </Dropdown.Item>
                    <Dropdown.Item>
                    <Link to={'/Register'}>Orders</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                    <button
                      type="button"
                      onClick={() => setOpen(true)}>
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
              to={'/'}
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
            >
              Home
            </NavLink>

            <NavLink
              to={'/Shop'}
              className={"block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
              }>
              Shop
            </NavLink>
            <NavLink
              to={'/About'}
              className={"block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
              }>
              About
            </NavLink>
            <NavLink
              to={'/Contact'}
              className={"block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
              }>
              Contact
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
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
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={image}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Qty {product.quantity}</p>

                                      <div className="flex">
                                        <button
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
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <Link to={'/Checkout'}
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


    </>
  )
}
