import React, { useContext, useState } from "react";
import { Swiper, SwiperOptions, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { ProductContext } from "../context/ProductContext";

import image from "../images/turbo.jpg";
import Product from "./Product";
import { CartContext } from "../context/CartContext";

export default function Landing(product) {
  const [quantity, setQuantitiy] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="dark:bg-gray-800 dark:text-white">
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <section>
          <div class="mx-auto max-w-[80rem]  py-12 ">
            <h2 class="text-2xl font-bold">Featured products</h2>

            <div class="mt-4">
              <div class="swiper">
                <div class="swiper-wrapper w-full">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    {products.map((product) => (
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="relative block border border-gray-100 dark:border-gray-500 rounded-lg">
                            <img
                              alt="ِAutopart"
                              src={product?.image}
                              class="h-56 w-full p-3 object-contain lg:h-72"
                            />

                            <div class="p-6">
                              <h3 class="mt-4 text-lg font-bold">
                                {product?.name}
                              </h3>

                              <p class="mt-2 text-sm font-medium text-gray-600"></p>

                              <button
                              onClick={() => addToCart(product?.id, quantity)}
                                type="button"
                                class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                              >
                                <span class="text-sm font-medium">
                                Add to Cart
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div class="swiper-pagination !relative !bottom-0 mx-auto mt-8 max-w-3xl"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <script>
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: true,
    pagination: {
      type: 'progressbar',
      el: '.swiper-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
</script> */}
      </div>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      <link
        href="https://unpkg.com/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
    </>
  );
}
