import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import AnimatedRoutes from './components/AnimatedRoutes';
import { useEffect, useState } from 'react';



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1) // infinite loop
  }, [count])
  return (
    <>

      <Header />
      <AnimatedRoutes />
      <Footer />
      <hero />
    </>
  );
}

export default App;
