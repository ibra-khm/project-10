import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import image from "../../images/brake.jpg";
import { Tabs } from "flowbite-react";
import SimilarSlider from "../../components/SimilarSlider";
import { useParams } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import axios from "axios";

export default function ProductPage(props) {
  const [quantity, setQuantitiy] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const productId = id;
      const result = await axios.get(
        `http://localhost:8000/api/product/${productId}`
      );
      setProduct(result.data);
      console.log("hi", product);
    };

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 ">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src={product?.image}
                class="aspect-square w-full rounded-xl object-cover"
              />

              <div class="grid grid-cols-4 w-full gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src={product?.image}
                  class="aspect-square h-16 w-16 rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src={product?.image}
                  class="aspect-square h-16 w-16 rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src={product?.image}
                  class="aspect-square h-16 w-16 rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src={product?.image}
                  class="aspect-square h-16 w-16 rounded-xl object-cover"
                />
              </div>
            </div>

            <div class="sticky top-10">
              <strong class=" px-3 py-0.5 text-xs font-medium tracking-wide ">
                
              </strong>

              <div class="mt-8 flex justify-between">
                <div class="max-w-[500px]">
                  <h1 class="text-4xl font-bold dark:text-gray-200">
                    {product?.name}
                  </h1>
                </div>

                <p class="text-2xl font-bold dark:text-gray-200">JOD {product?.price}</p>
              </div>

              <div class="group relative mt-4">
                <summary class="block">
                  <div>
                    <div class=" max-w-none text-lg group-open:hidden dark:text-gray-200">
                      <p>
                     {product?.description}
                      </p>
                    </div>
                  </div>
                </summary>

             
              </div>

              <div class="mt-8 gap-6 flex justify-left">

                <button
                  class="ml-3 block rounded bg-brand px-6 py-3 text-md font-medium text-white dark:text-black hover:bg-green-500"
                  onClick={() => addToCart(product.id, quantity)}
                >
                  Add to cart
                </button>
                <input
                className="w-16"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantitiy(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-9/12 mt-20 mx-auto mb-20 ">
        <Tabs.Group
          aria-label="Tabs with underline"
          style="underline"
          className="mx-auto my-5 dark:text-gray-200"
        >
          <Tabs.Item title="Description">
            <h1>Description</h1>
            <br />
            <p>
              {product?.description}
            </p>
          </Tabs.Item>
          {/* <Tabs.Item title="Reviews">
            <section>
              <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 dark:text-gray-300"  >
                <h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

                <div class="mt-4 flex items-center">
                  <p class="text-3xl font-medium">
                    3.8
                    <span class="sr-only"> Average review score </span>
                  </p>

                  <div class="ml-4">
                    <div class="-ml-1 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-xs text-gray-500">
                      Based on 48 reviews
                    </p>
                  </div>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
                  <blockquote>
                    <header class="sm:flex sm:items-center">
                      <div class="-ml-1 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                        The best thing money can buy!
                      </p>
                    </header>

                    <p class="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer class="mt-4">
                      <p class="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>

                  <blockquote>
                    <header class="sm:flex sm:items-center">
                      <div class="-ml-1 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                        The best thing money can buy!
                      </p>
                    </header>

                    <p class="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer class="mt-4">
                      <p class="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>

                  <blockquote>
                    <header class="sm:flex sm:items-center">
                      <div class="-ml-1 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                        The best thing money can buy!
                      </p>
                    </header>

                    <p class="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer class="mt-4">
                      <p class="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>

                  <blockquote>
                    <header class="sm:flex sm:items-center">
                      <div class="-ml-1 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p class="mt-2 font-medium sm:ml-4 sm:mt-0">
                        The best thing money can buy!
                      </p>
                    </header>

                    <p class="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer class="mt-4">
                      <p class="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>
          </Tabs.Item>
          <Tabs.Item active={true} title="Details">
            <div class="overflow-x-auto">
              <table class=" w-11/12 divide-y mx-auto divide-gray-200 text-sm">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                      Package details
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                      Manufactured
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                      Category
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      John Doe
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      Web Developer
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      $120,000
                    </td>
                  </tr>

                  <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Jane Doe
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      04/11/1980
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      Web Designer
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      $100,000
                    </td>
                  </tr>

                  <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tabs.Item> */}
        </Tabs.Group>
      </div>

      <SimilarSlider />
    </motion.div>
  );
}
