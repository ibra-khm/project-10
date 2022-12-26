import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../Pages/About';
import Checkout from '../Pages/Checkout';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Item from '../Pages/Item';
import Notfound from '../Pages/Notfound';
import Profile from '../Pages/Profile';
import Register from '../Pages/Register';
import Shop from '../Pages/Shop';
import CartTotal from '../Pages/CartTotal';
import Login from '../components/Login';
import { AnimatePresence } from 'framer-motion'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '../context/AuthContext';


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <GoogleOAuthProvider clientId='48260052822-f8mir2j7dhdo08subeqmn1gdj9q9bp0q.apps.googleusercontent.com'>
                <AuthProvider>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Shop" element={<Shop />} />
                        <Route path="/Checkout" element={<Checkout />} />
                        <Route path="/Product" element={<Item />} />
                        <Route path="*" element={<Notfound />} />
                        <Route path="/Cart" element={<CartTotal />} />
                    </Routes>
                </AuthProvider>
            </GoogleOAuthProvider >
        </AnimatePresence>

    )
}

export default AnimatedRoutes