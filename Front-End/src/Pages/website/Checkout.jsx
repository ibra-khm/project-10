import React, { useContext, useEffect, useState} from "react";
import { motion } from "framer-motion";
import { CartContext } from "../../context/CartContext";
import { CardElement, useStripe } from "@stripe/react-stripe-js";
import {
  json,
  Link,
  Navigate,
  useHistory,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useCookies } from "react-cookie";
import { useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
export default function Checkout() {
  const {cookies, user} = useContext(AuthContext)
  const { cart, setCart } = useContext(CartContext);

    const handleCheckout = () => {
      swal('success', "Order Purchased Successfully!")
        setCart([]);
        console.log(cart)
        window.location.replace('/');
    }
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    let newSubtotal = 0;
    cart?.forEach((item) => {
      newSubtotal += item.product.price * item.quantity;
    });
    setSubtotal(newSubtotal);
  }, [cart]);

  const [info, setInfo] = useState({
    fName: "",
    lName: "",
    phone: ""
})
useEffect(() => {
    if (user.name) {
        setInfo({
            fName: user?.name.split(" ")[0],
            lName: user?.name.split(" ")[1],
            phone: ""
        })
    }
}, [user])
const [err, setErr] = useState(false)
const handleSubmit = async (event) => {
    event.preventDefault();
    if (info.fName === "" || info.lName === "" || info.phone.length < 10) {
        setErr(true)
        console.log(err);
        return
    } else {
        setErr(false)
    }


    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //     type: 'card',
    //     card: elements.getElement(CardElement),

    // }).then((res) => {
    //     if (res.paymentMethod) {


    //         const card = {
    //             brand: res.paymentMethod.card.brand,
    //             country: res.paymentMethod.card.country,
    //             last4: res.paymentMethod.card.last4,
    //         }

    //         const data = {
    //             serialNum: res.paymentMethod.id,
    //             name: info.fName + " " + info.lName,
    //             phone: info.phone,
    //             cart: cart,
    //             totalPrice: setSubtotal(),
    //             card: card,
    //         }

    //         axios
    //             .post("/api/buy/tickets", data, {
    //                 headers: {
    //                     Authorization: `Bearer ${cookies.Token}`,
    //                 },
    //             })
    //             .then((res) => {
    //                 if (res.status) {
    //                     Navigate('/profile')

    //                 }
    //             });
    //     }
    // })
}

  return (
    <>

      <section>
        <h1 class="sr-only">Checkout</h1>

        <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div class="py-12 bg-gray-50 dark:bg-gray-800 md:py-24">
            <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div class="flex items-center">
                <span class="w-10 h-10 bg-brand rounded-full"></span>

                <h2 class="ml-4 text-3xl font-medium text-gray-900 dark:text-white">
                  Checkout
                </h2>
              </div>

              <div>
                <p class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                  JOD: {subtotal.toFixed(2)}
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  For the purchase of
                </p>
              </div>

              <div>
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-100 dark:divide-gray-700">
                    {cart &&
                      cart.map((item) => (
                        <li key={item?.id} class="flex items-center py-4">
                          <img
                            src={item.product.image}
                            alt=""
                            class="object-cover w-24 h-24 rounded"
                          />

                          <div class="ml-4">
                            <h3 class="text-xl text-gray-900 dark:text-white">
                              {item?.product.name}
                            </h3>

                            <dl class="mt-0.5 space-y-px text-md text-gray-600 dark:text-gray-300">
                              <div>
                                <dt class="inline">Qty: </dt>
                                <dd class="inline">{item?.quantity}</dd>
                              </div>

                              <div>
                                <dt class="inline">JOD: </dt>
                                <dd class="inline">
                                  {item?.product.price * item?.quantity}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </li>
                      ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="py-12 bg-white dark:bg-gray-900 md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <form onSubmit={handleSubmit} class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    for="LastName"
                    class="block text-xs font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-xs font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Phone"
                    class="block text-xs font-medium text-gray-700 dark:text-gray-200"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Card Details
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm dark:bg-gray-900">
                    <div>
                      <label for="CardNumber" class="sr-only">
                        {" "}
                        Card Number{" "}
                      </label>

                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Card Number"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                      />
                    </div>

                    <div class="flex -space-x-px">
                      <div class="flex-1">
                        <label for="CardExpiry" class="sr-only">
                          {" "}
                          Card Expiry{" "}
                        </label>

                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Expiry Date"
                          class="relative w-full border-gray-200 rounded-bl-md focus:z-10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                        />
                      </div>

                      <div class="flex-1">
                        <label for="CardCVC" class="sr-only">
                          {" "}
                          Card CVC{" "}
                        </label>

                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          class="relative w-full border-gray-200 rounded-br-md focus:z-10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Billing Address
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm dark:bg-gray-900">
                    <div>
                      <label for="Country" class="sr-only">
                        Country
                      </label>

                      <select
                        id="Country"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label class="sr-only" for="PostalCode">
                        {" "}
                        ZIP/Post Code{" "}
                      </label>

                      <input
                        type="text"
                        id="PostalCode"
                        placeholder="ZIP/Post Code"
                        class="relative w-full border-gray-200 rounded-b-md focus:z-10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                      />
                    </div>
                  </div>
                </fieldset>

                <div class="col-span-6">
                  <button onClick={handleCheckout} class="block w-full rounded-md bg-black p-2.5 text-md text-white dark:text-black transition hover:shadow-lg dark:bg-brand dark:hover:bg-brand/90">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
