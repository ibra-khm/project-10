import React from "react";

function CarFilter() {
  return (
    <>
      <div className="  w-full flex bg-opacity-10 justify-center items-center flex-wrap h-[30rem]  bg-center bg-no-repeat bg-cover bg-[url('./images/hero.jpg')]">
        <div className="dark:bg-black/20  w-full h-full flex items-center justify-center">
          <div className=" backdrop-blur-[1px] p-2 ">
            <h1 className="text-6 xl z-50  md:text-6xl lg:text-6xl antialiased font-semibold leading-none text-center text-gray-100">
              Welcome to <span className="text-brand">Partsly</span>
            </h1>
            <h1 className="text-4xl mt-5 md:text-2xl lg:text-3xl antialiased font-semibold leading-none text-center text-creme">
              Your one Stop Shop for Autoparts and Accessories
            </h1>
          </div>
        </div>
        {/* <div className="container   text-white flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-6xl   sm:text-6xl lg:2xl antialiased font-semibold leading-none text-center dark:text-gray-100">SELECT YOUR VEHICLE</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                    <div className='content-center mx-auto justify-center text-gray-500 flex overflow-auto lg:flex-row flex-col'>
                        <div className='flex w-11/12 '>

                            <select className="w-[12rem] p-3 mr-1 rounded-l-lg">

                                <option selected="true" disabled="disabled">1 | Select Maker</option>
                                <option value="Audi">Audi</option>
                                <option value="Honda">Honda</option>
                                <option value="Mazda">Mazda</option>
                            </select>
                        </div>
                        <div className=' flex w-11/12'>
                            <select className="w-[12rem] p-3 mr-1">
                                <option selected="true" disabled="disabled">2 | Select Model</option>
                                <option value="">A3</option>
                                <option value="">A5</option>
                                <option value="">Civic</option>
                            </select>
                        </div>
                        <div className='w-11/12'>
                            <select className="w-[12rem] p-3 mr-1">
                                <option selected="true" disabled="disabled">3 | Select Year</option>
                                <option value="">2022</option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                                <option value="">2018</option>
                                <option value="">2017</option>
                            </select>
                        </div>
                        <button type="submit" class="inline-flex items-center py-2.5 px-8 text-sm font-medium text-black bg-brand rounded-r-lg hover:text-white hover:bg-black hover:duration-700 focus:ring-4 focus:ring-brand focus:outline-none dark:bg-brand dark:hover:bg-black ">
                            <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>SELECT
                        </button>
                    </div>
                </div> */}
      </div>
    </>
  );
}

export default CarFilter;
