import React from 'react'
import { Swiper, SwiperOptions, SwiperSlide } from "swiper/react"
import 'swiper/css';
import image from '../images/turbo.jpg'

export default function Landing() {
  return (
    <>
      <div>Home
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />


        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold">Featured Categories</h2>

            <div class="mt-4">
              <div class="swiper">
                <div class="swiper-wrapper">


                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>   <div class="swiper-slide">
                      <div class="relative block border border-gray-100">
                        <img
                          alt="Toy"
                          src={image}
                          class="h-56 w-full object-contain lg:h-72"
                        />

                        <div class="p-6">
                          <h3 class="mt-4 text-lg font-bold">Autopart Category</h3>

                          <p class="mt-2 text-sm font-medium text-gray-600"></p>

                          <button
                            type="button"
                            class="mt-4 flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 text-black bg-brand hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black "
                          >
                            <span class="text-sm font-medium"> Browse Category </span>


                          </button>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>



                  </Swiper>
                </div>

                <div
                  class="swiper-pagination !relative !bottom-0 mx-auto mt-8 max-w-3xl"
                ></div>
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
      <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />





      {/* <script>
        document.addEventListener('DOMContentLoaded', function () {
          new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 32,
            autoplay: {
              delay: 8000,
            },
            breakpoints: {
              640: {
                centeredSlides: true,
                slidesPerView: 1.25,
              },
              1024: {
                centeredSlides: false,
                slidesPerView: 1.5,
              },
            },
            navigation: {
              nextEl: '.next-button',
              prevEl: '.prev-button',
            },
          })
        })
      </script> */}
      {/* <Swiper
      spaceBetween={32}
      slidesPerView={1}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      nextEl={'.next-button'}
      prevEl={'.prev-button'}
    >
      <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}

    </>
  )
}
