import axios from "axios";
import { Pagination } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";

export default function Products() {
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("http://localhost:8000/api/categories");
      setCategories(response.data);
      console.log(categories);
    };
    fetchCategories();
  }, []);

  const { products } = useContext(ProductContext);

  const filteredProducts = products
    ? products.filter((product) => {
        return (
          selectedCategory === null || product.category === selectedCategory
        );
      })
    : [];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className="dark:bg-gradient-to-br dark:from-gray-800 dark:via-white/20 dark:to-black/30">
        <img src="strip2.jpg" alt="" />

        <div class="mx-auto max-w-[80rem] px-4 py-12 sm:px-6 ">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-4  lg:items-start">
            <div class="lg:sticky lg:top-[90px]">
              <details
                open
                class="overflow-hidden rounded border border-gray-200 dark:border-black/40"
              >
                <summary class="flex items-center justify-between bg-gray-100 dark:bg-black/30 text-creme px-5 py-3 lg:hidden">
                  <span class="text-sm font-medium">Filters </span>

                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form class="border-t border-gray-200 dark:text-gray-300 dark:border-black/20 lg:border-t-0">
                  <fieldset>
                    <legend class="block w-full bg-gray-50 dark:bg-black/20 px-5 py-3 text-xs font-medium">
                      Categories
                    </legend>
                    <div class="space-y-2 px-5 py-6">
                      <ul>
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            className={
                              category === selectedCategory ? "active" : ""
                            }
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category.name}
                          </li>
                        ))}
                      </ul>
                      <div class="flex items-center">
                        <input
                          id="Wheels & Tires"
                          type="checkbox"
                          name="type[Wheels & Tires]"
                          class="h-5 w-5 rounded border-gray-200 dark:border-black dark:bg-gray-600"
                        />

                        <label
                          for="Wheels & Tires"
                          class="ml-3 text-sm font-medium"
                        >
                          Wheels & Tires
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="game"
                          type="checkbox"
                          name="type[game]"
                          class="h-5 w-5 rounded border-gray-300 dark:border-black dark:bg-gray-600"
                        />

                        <label for="game" class="ml-3 text-sm font-medium">
                          Repair Parts
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="outdoor"
                          type="checkbox"
                          name="type[outdoor]"
                          class="h-5 w-5 rounded dark:border-black dark:bg-gray-600 border-gray-300"
                        />

                        <label for="outdoor" class="ml-3 text-sm font-medium">
                          Lighting
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="outdoor"
                          type="checkbox"
                          name="type[outdoor]"
                          class="h-5 w-5 rounded dark:border-black dark:bg-gray-600 border-gray-300"
                        />

                        <label for="outdoor" class="ml-3 text-sm font-medium">
                          Electronics
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="outdoor"
                          type="checkbox"
                          name="type[outdoor]"
                          class="h-5 w-5 rounded dark:border-black dark:bg-gray-600 border-gray-300"
                        />

                        <label for="outdoor" class="ml-3 text-sm font-medium">
                          Body Parts
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="outdoor"
                          type="checkbox"
                          name="type[outdoor]"
                          class="h-5 w-5 rounded dark:border-black dark:bg-gray-600 border-gray-300"
                        />

                        <label for="outdoor" class="ml-3 text-sm font-medium">
                          Performance Parts
                        </label>
                      </div>

                      <div class="pt-2">
                        <button
                          type="button"
                          class="text-xs text-gray-500 dark:text-gray-300 underline"
                        >
                          Reset Categories
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <fieldset>
                      <legend class="block w-full bg-gray-50 dark:bg-black/20 px-5 py-3 text-xs font-medium">
                        Car Type
                      </legend>

                      <div class="space-y-2 px-5 py-6">
                        <div class="flex items-center">
                          <input
                            id="3+"
                            type="checkbox"
                            name="age[3+]"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <label for="3+" class="ml-3 text-sm font-medium">
                            SUV
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="8+"
                            type="checkbox"
                            name="age[8+]"
                            class="h-5 w-5 rounded border-gray-300 dark:border-black dark:bg-gray-600"
                          />

                          <label for="8+" class="ml-3 text-sm font-medium">
                            Sedan
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="8+"
                            type="checkbox"
                            name="age[8+]"
                            class="h-5 w-5 rounded border-gray-300 dark:border-black dark:bg-gray-600"
                          />

                          <label for="8+" class="ml-3 text-sm font-medium">
                            Coupe
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="12+"
                            type="checkbox"
                            name="age[12+]"
                            class="h-5 w-5 rounded border-gray-300 dark:border-black dark:bg-gray-600"
                          />

                          <label for="12+" class="ml-3 text-sm font-medium">
                            Hatchback
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="16+"
                            type="checkbox"
                            name="age[16+]"
                            class="h-5 w-5 rounded border-gray-300 dark:border-black dark:bg-gray-600"
                          />

                          <label for="16+" class="ml-3 text-sm font-medium">
                            Wagon
                          </label>
                        </div>

                        <div class="pt-2">
                          <button
                            type="button"
                            class="text-xs text-gray-500 dark:text-gray-300 underline"
                          >
                            Reset Type
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="flex justify-between border-t border-gray-200 px-5 py-3">
                    <button
                      name="reset"
                      type="button"
                      class="rounded text-xs font-medium dark:text-gray-300 text-gray-600 underline"
                    >
                      Reset All
                    </button>

                    <button
                      name="commit"
                      type="button"
                      class="rounded bg-brand px-5 py-3 text-xs font-medium text-black"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>

            <div class="lg:col-span-3">
              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-500">
                  <span class="hidden sm:inline"> Showing </span>
                  {products?.length} Products
                </p>
              </div>

              <div class="mt-4 grid grid-cols-1  border border-gray-200 dark:border-none dark:bg-transparent bg-creme gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products ? (
                  products.map((product) => <Product product={product} />)
                ) : (
                  <>
                    <div
                      role="status"
                      class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg
                          class="w-12 h-12 text-gray-200 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      <div class="flex items-center mt-4 space-x-3">
                        <svg
                          class="text-gray-200 w-14 h-14 dark:text-gray-700"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div
                      role="status"
                      class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg
                          class="w-12 h-12 text-gray-200 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      <div class="flex items-center mt-4 space-x-3">
                        <svg
                          class="text-gray-200 w-14 h-14 dark:text-gray-700"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div
                      role="status"
                      class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg
                          class="w-12 h-12 text-gray-200 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      <div class="flex items-center mt-4 space-x-3">
                        <svg
                          class="text-gray-200 w-14 h-14 dark:text-gray-700"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div
                      role="status"
                      class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg
                          class="w-12 h-12 text-gray-200 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      <div class="flex items-center mt-4 space-x-3">
                        <svg
                          class="text-gray-200 w-14 h-14 dark:text-gray-700"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div
                      role="status"
                      class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg
                          class="w-12 h-12 text-gray-200 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      <div class="flex items-center mt-4 space-x-3">
                        <svg
                          class="text-gray-200 w-14 h-14 dark:text-gray-700"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div
                      role="status"
                      class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg
                          class="w-12 h-12 text-gray-200 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      <div class="flex items-center mt-4 space-x-3">
                        <svg
                          class="text-gray-200 w-14 h-14 dark:text-gray-700"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center justify-end text-center">
                {/* <Pagination
                  currentPage={1}
                  layout="pagination"
                  // onPageChange={onPageChange}
                  showIcons={true}
                  totalPages={100}
                  previousLabel=""
                  nextLabel=""
                /> */}
              </div>
            </div>
          </div>
          <div className="max-w-[80rem] mx-auto pt-16">
            <img src="/strip1.jpg" alt="test" />
          </div>
        </div>
      </section>

      {window.addEventListener("resize", () => {
        const desktopScreen = window.innerWidth < 768;

        document.querySelector("details").open = !desktopScreen;
      })}
    </>
  );
}
