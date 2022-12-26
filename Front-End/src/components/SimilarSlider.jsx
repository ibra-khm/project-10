import React from 'react'
import { Swiper, SwiperOptions, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { Link } from 'react-router-dom'
import image from '../images/brake.jpg'

function SimilarSlider() {
  return (
    <div className='max-w-screen bg-creme py-1'>
    <div className='w-9/12 mt-20 mx-auto mb-20'>
        <div className='w-3/12 mb-5'>
      <h2 class="text-3xl mb-1 font-bold">Similar Products</h2>
      <hr className='border-b-[2px] w-10/12 border-brand' />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        title={""}
      >

        
<SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>
        <SwiperSlide>   <div class="swiper-slide bg-white">
          <div class="relative block bg-white">
            <button
              type="button"
              class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
            >
              <span class="sr-only">Wishlist</span>
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <Link to={'/Product'}>
            <img
              alt="Wheels & Tires"

              src={image}
              class="h-56 w-full object-contain lg:h-72"
            />
            </Link>

            <div class="p-6">
              <span
                class="inline-block bg-brand px-3 py-1 text-xs font-medium"
              >
                New
              </span>

              <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>

              <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>

              <button
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
        </div>
        </SwiperSlide>



      </Swiper>
    </div>
  </div>
  )
}

export default SimilarSlider