import React from "react";
import Landing from "../../components/Landing";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import CarFilter from "../../components/CarFilter";
import ProductsGrid from "../../components/ProductsGrid";

export default function Home() {
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CarFilter />
        <div className="flex lg:flex-row flex-col justify-center gap-4 max-w-[80rem] mx-auto pt-10">
          <div className=" w-[50%]">
            <img src="banner1.jpg" alt="banner1" />
          </div>
          <div className="w-[50%]">
            <img src="banner2.jpg" alt="banner1" />
          </div>
        </div>
        <Landing />
        <ProductsGrid />
        <Testimonials />
      </motion.div>
    </>
  );
}
