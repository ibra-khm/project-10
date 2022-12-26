import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { motion } from 'framer-motion'

export default function Register() {
  return (
    <>

<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        

  <Login />
      </motion.div>

    
    </>
  )
}
