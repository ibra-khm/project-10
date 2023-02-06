import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import AnimatedRoutes from './components/AnimatedRoutes';
import { useEffect, useState } from 'react';



function App() {

  return (
    <>

      {/* <Header /> */}
      <div className=' bg-creme  dark:bg-gray-800'>

      <AnimatedRoutes />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
