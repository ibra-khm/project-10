import React from 'react'
import { Link } from 'react-router-dom'

function ProductsGrid() {
    return (
        <div className='max-w-screen mx-auto grid place-items-center mb-5'>
            <div className='w-3/12 mb-5 ml-20 place-items-center'>
                <h2 class="text-3xl mb-1 font-bold ml-2">Featured Categories</h2>
                <hr className='border-b-[1px] ml-2 mt-2 w-9/12 border-brand' />
            </div>
            <div
                class="mt-4 grid grid-cols-1 w-9/12 gap-4 border mx-auto border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-3"
            >


                <div class="relative block h-max items-center border-black border bg-white">

                    <Link to={'/Product'}>

                        <img
                            alt="Wheels & Tires"
                            src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                            class="h-56 w-full object-contain lg:h-72"
                        />
                    </Link>

                    <div className='mx-auto'>
                        <div class="p-4">

                            <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>



                            <button
                                type="button"
                                class="mt-4 flex w-7/12 items-center justify-center rounded-sm bg-brand px-8 py-4"
                            >
                                <span class="text-sm font-medium"> Browse Category </span>

                            </button>
                        </div>

                    </div>
                </div>
                <div class="relative block h-max items-center border-black border bg-white">

                    <Link to={'/Product'}>

                        <img
                            alt="Wheels & Tires"
                            src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
                            class="h-56 w-full object-contain lg:h-72"
                        />
                    </Link>

                    <div className='mx-auto'>
                        <div class="p-4">

                            <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>



                            <button
                                type="button"
                                class="mt-4 flex w-7/12 items-center justify-center rounded-sm bg-brand px-8 py-4"
                            >
                                <span class="text-sm font-medium"> Browse Category </span>

                            </button>
                        </div>

                    </div>
                </div>
                <div class="relative block h-max items-center border-black border bg-white">

<Link to={'/Product'}>

    <img
        alt="Wheels & Tires"
        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
        class="h-56 w-full object-contain lg:h-72"
    />
</Link>

<div className='mx-auto'>
    <div class="p-4">

        <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>



        <button
            type="button"
            class="mt-4 flex w-7/12 items-center justify-center rounded-sm bg-brand px-8 py-4"
        >
            <span class="text-sm font-medium"> Browse Category </span>

        </button>
    </div>

</div>
</div>
<div class="relative block h-max items-center border-black border bg-white">

<Link to={'/Product'}>

    <img
        alt="Wheels & Tires"
        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
        class="h-56 w-full object-contain lg:h-72"
    />
</Link>

<div className='mx-auto'>
    <div class="p-4">

        <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>



        <button
            type="button"
            class="mt-4 flex w-7/12 items-center justify-center rounded-sm bg-brand px-8 py-4"
        >
            <span class="text-sm font-medium"> Browse Category </span>

        </button>
    </div>

</div>
</div>
<div class="relative block h-max items-center border-black border bg-white">

<Link to={'/Product'}>

    <img
        alt="Wheels & Tires"
        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
        class="h-56 w-full object-contain lg:h-72"
    />
</Link>

<div className='mx-auto'>
    <div class="p-4">

        <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>



        <button
            type="button"
            class="mt-4 flex w-7/12 items-center justify-center rounded-sm bg-brand px-8 py-4"
        >
            <span class="text-sm font-medium"> Browse Category </span>

        </button>
    </div>

</div>
</div>
<div class="relative block h-max items-center border-black border bg-white">

<Link to={'/Product'}>

    <img
        alt="Wheels & Tires"
        src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2017/06/prod1_deposit_opt-300x300.jpg"
        class="h-56 w-full object-contain lg:h-72"
    />
</Link>

<div className='mx-auto'>
    <div class="p-4">

        <h3 class="mt-4 text-lg font-bold">Autopart Name</h3>



        <button
            type="button"
            class="mt-4 flex w-7/12 items-center justify-center rounded-sm bg-brand px-8 py-4"
        >
            <span class="text-sm font-medium"> Browse Category </span>

        </button>
    </div>

</div>
</div>
            </div>
        </div>
    )
}

export default ProductsGrid