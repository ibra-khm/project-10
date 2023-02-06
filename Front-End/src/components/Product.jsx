import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Product({ product }) {
  const [quantity, setQuantitiy] = useState(1);
  const { addToCart } = useContext(CartContext);
  return (
    <div key={product._id} class="relative bg-white  dark:border-gray-600 block dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-600 dark:to-black/30">
      <Link to={`/product/${product.id}`}>
        <img
          alt="Wheels & Tires"
          src={product.image}
          class="h-56 w-full object-contain lg:h-72"
        />
      </Link>

      <div class="p-6">
        <span class="inline-block bg-brand px-3 py-1 text-xs font-medium">
          New
        </span>

        <h3 class="mt-4 dark:text-creme text-lg font-bold">{product.name}</h3>

        <p class="mt-2 text-lg font-medium text-gray-600 dark:text-gray-200">JOD {product.price}</p>

        <button
          onClick={() => addToCart(product.id, quantity)}
          type="button"
          class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4"
        >
          <span class="text-sm font-medium"> Add to Cart </span>

          <svg
            class="ml-1.5 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
