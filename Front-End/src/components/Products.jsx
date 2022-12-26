import { Pagination } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <>

            <section>
                <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
                        <div class="lg:sticky lg:top-4">
                            <details open class="overflow-hidden rounded border border-gray-200">
                                <summary
                                    class="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden"
                                >
                                    <span class="text-sm font-medium"> Toggle Filters </span>

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

                                <form class="border-t border-gray-200 lg:border-t-0">
                                    <fieldset>
                                        <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                                            Categories
                                        </legend>
                                        <div class="space-y-2 px-5 py-6">
                                            <div class="flex items-center">
                                                <input
                                                    id="Wheels & Tires"
                                                    type="checkbox"
                                                    name="type[Wheels & Tires]"
                                                    class="h-5 w-5 rounded border-gray-300"
                                                />

                                                <label for="Wheels & Tires" class="ml-3 text-sm font-medium">
                                                    Wheels & Tires
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input
                                                    id="game"
                                                    type="checkbox"
                                                    name="type[game]"
                                                    class="h-5 w-5 rounded border-gray-300"
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
                                                    class="h-5 w-5 rounded hover:bg-brand focus:bg-brand selection:bg-brand border-gray-300"
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
                                                    class="h-5 w-5 rounded hover:bg-brand focus:bg-brand selection:bg-brand border-gray-300"
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
                                                    class="h-5 w-5 rounded hover:bg-brand focus:bg-brand selection:bg-brand border-gray-300"
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
                                                    class="h-5 w-5 rounded hover:bg-brand focus:bg-brand selection:bg-brand border-gray-300"
                                                />

                                                <label for="outdoor" class="ml-3 text-sm font-medium">
                                                    Performance Parts
                                                </label>
                                            </div>

                                            <div class="pt-2">
                                                <button type="button" class="text-xs text-gray-500 underline">
                                                    Reset Categories
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div>
                                        <fieldset>
                                            <legend
                                                class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium"
                                            >
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
                                                        class="h-5 w-5 rounded border-gray-300"
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
                                                        class="h-5 w-5 rounded border-gray-300"
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
                                                        class="h-5 w-5 rounded border-gray-300"
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
                                                        class="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <label for="16+" class="ml-3 text-sm font-medium">
                                                        Wagon
                                                    </label>
                                                </div>

                                                <div class="pt-2">
                                                    <button
                                                        type="button"
                                                        class="text-xs text-gray-500 underline"
                                                    >
                                                        Reset Age
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div
                                        class="flex justify-between border-t border-gray-200 px-5 py-3"
                                    >
                                        <button
                                            name="reset"
                                            type="button"
                                            class="rounded text-xs font-medium text-gray-600 underline"
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
                                    6 of 24 Products
                                </p>

                                <div class="ml-4">
                                    <label for="SortBy" class="sr-only"> Sort </label>

                                    <select
                                        id="SortBy"
                                        name="sort_by"
                                        class="rounded border-gray-200 text-sm focus:ring-brand focus:border-brand">
                                        <option readonly>Sort</option>
                                        <option value="title-asc">Title, A-Z</option>
                                        <option value="title-desc">Title, Z-A</option>
                                        <option value="price-asc">Price, Low-High</option>
                                        <option value="price-desc">Price, High-Low</option>
                                    </select>
                                </div>
                            </div>

                            <div
                                class="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3"
                            >
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
                                            src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
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

                                <a href="#" class="relative block bg-white">
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

                                    <img
                                        alt="Wheels & Tires"

                                        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                                        class="h-56 w-full object-contain lg:h-72"
                                    />

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
                                </a>

                                <a href="#" class="relative block bg-white">
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

                                    <img
                                        alt="Wheels & Tires"
                                        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                                        class="h-56 w-full object-contain lg:h-72"
                                    />

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
                                </a>

                                <a href="#" class="relative block bg-white">
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

                                    <img
                                        alt="Wheels & Tires"
                                        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                                        class="h-56 w-full object-contain lg:h-72"
                                    />

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
                                </a>

                                <a href="#" class="relative block bg-white">
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

                                    <img
                                        alt="Wheels & Tires"
                                        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                                        class="h-56 w-full object-contain lg:h-72"
                                    />

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
                                </a>

                                <a href="#" class="relative block bg-white">
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

                                    <img
                                        alt="Wheels & Tires"
                                        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                                        class="h-56 w-full object-contain lg:h-72"
                                    />

                                    <div class="p-6">
                                        <span
                                            class="inline-block bg-brand px-3 py-1 text-xs font-medium"
                                        >
                                            New
                                        </span>

                                        <h3 class="mt-4 text-lg font-bold">Robot Wheels & Tires</h3>

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
                                </a>
                            </div>
                            <div className="flex items-center justify-end text-center">
                                <Pagination
                                    currentPage={1}
                                    layout="pagination"
                                    // onPageChange={onPageChange}
                                    showIcons={true}
                                    totalPages={100}
                                    previousLabel=""
                                    nextLabel=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {window.addEventListener('resize', () => {
                const desktopScreen = window.innerWidth < 768

                document.querySelector('details').open = !desktopScreen
            })}


        </>
    )
}
