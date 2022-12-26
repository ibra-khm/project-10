import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Notfound() {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
         class={"grid h-screen place-content-center bg-white"}>
            <div class="text-center">
                <strong class="text-9xl font-black text-gray-200">404</strong>

                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </h1>

                <p class="mt-4 text-gray-500">We can't find that page.</p>

                <Link 
                    to={'/'}
                    className={"mt-6 inline-block rounded bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring"
                }>
                    Go Back Home
                </Link>
            </div>
        </motion.div>

    )
}
