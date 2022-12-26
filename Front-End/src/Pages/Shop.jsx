import React from 'react'
import ShopPage from '../components/ShopPage'
import { motion } from 'framer-motion'

export default function Shop() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <ShopPage />

      </motion.div>


    </>
  )
}
