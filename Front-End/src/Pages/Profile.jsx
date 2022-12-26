import React from 'react'
import { motion } from 'framer-motion'

export default function Profile() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >

    

<div class="w-full max-w-md mx-auto px-8 py-8 mt-20 bg-white rounded-lg shadow-lg dark:bg-gray-800">
			<div class="relative flex justify-center -mt-16 group">
				<img
					class=" object-cover w-20 h-20 border-2 border-darkRed rounded-full "
					alt="Testimonial avatar"
					src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
				/>
				<div class="w-20 h-20 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
					<img
						class="hidden group-hover:block w-5"
						src="https://www.svgrepo.com/show/33565/upload.svg"
						alt=""
					/>
				</div>
			</div>

			<h2 class="pt-6 text-center text-2xl font-semibold text-gray-800  md:mt-0 md:text-3xl">
				Welcome John Doe
			</h2>

			<p class="mt-2 text-center text-gray-600 dark:text-gray-200">
				You can manage your profile here
			</p>
			{/* <p class="mt-2 text-gray-600 dark:text-gray-200">Payment Info:</p> */}

			{/* <div class="flex justify-end mt-4">
				<Button bgColor="bg-darkGreen" text="EDIT PROFILE" />
			</div> */}
		</div>
  </motion.div>
  )
}
