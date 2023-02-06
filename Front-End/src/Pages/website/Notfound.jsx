import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Notfound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      class={"grid h-screen place-content-center bg-white dark:bg-gray-900"}
    >
      <div class="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
        <div class="text-center">
          <h1 class="font-black text-gray-200 text-9xl dark:text-gray-700">
            404
          </h1>

          <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Uh-oh!
          </p>

          <p class="mt-4 text-gray-500 dark:text-gray-400">
            We can't find that page.
          </p>

          <Link
            to={"/"}
            className={
              "mt-6 inline-block dark:text-black rounded bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring"
            }
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
