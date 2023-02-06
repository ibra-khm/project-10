import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
    >
      <section class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        Trusted by eCommerce Businesses
      </h2>

      <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
        laborum labore provident impedit esse recusandae facere libero harum
        sequi.
      </p>
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
        >
          <dt
            class="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            Total Sales
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            $4.8m
          </dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
        >
          <dt
            class="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            Official Addons
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
        >
          <dt
            class="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            Total Addons
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

    </motion.div>
  );
}
