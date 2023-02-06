import React, { useContext, useEffect, useState } from 'react';
// import { Input } from "@material-tailwind/react";
import { AuthContext } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import axios from 'axios';

export default function SignIn() {
  const { setUser, setCookie, setStateToken, setIsAdmin, loginWithGoogle, loginWithFacebook } = useContext(AuthContext);

  // Navigation hook
  const navigate = useNavigate();

  // Get inputs from user
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    errors: [],
  });

  // Handle inputs function
  const handleInput = (e) => {
    e.persist();

    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email: loginData.email,
      password: loginData.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/login", data).then((res) => {
        if (res.data.status === "success") {
          console.log(res);
          const token = res.data.token;
          setCookie("Token", token, { path: "/" });
          setStateToken(token);
          setUser(res.data.user);
          if (res.data.user.role === "admin") {
            setIsAdmin(true);
            localStorage.setItem("admin", "true");
          } else {
            setIsAdmin(false);
          }
          navigate("/", { replace: true });
        } else {
          console.log(res);
          setLoginData({ ...loginData, errors: res.data.errors });
        }
      });
    });
  };



  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden">
            <a
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10 text-brand"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h1
              className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome Back! 👋🏻
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Sign in to save your vehicles, track your orders and earn Rewards while you Shop.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">

            <div className="col-span-6">
              <div className="hidden lg:relative lg:block lg:pb-12">
                <a className="block text-black" href="/">
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8 sm:h-10 text-brand"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                  Welcome Back! 👋🏻
                </h2>

                <p className="mt-4 leading-relaxed text-black/90">
                  Sign in to save your vehicles, track your orders and earn Rewards while you Shop.
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={loginData?.email}
                  onChange={handleInput}
                  className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                value={loginData?.password}
                onChange={handleInput}
                className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
              />
              {/* {loginErrors?.password && (
                <small className="text-red-500 mt-5">{loginData.errors.password}</small>
              )} */}
            </div>

            <div className="col-span-6">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our &nbsp;
                <a href="#" className="text-gray-700 underline">
                  terms and conditions
                </a>
                &nbsp; and &nbsp;
                <a href="#" className="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type='submit'
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Login
              </button>

              <div className=" mt-3 gap-16 flex items-center justify-center  ">
                <GoogleLogin
                  type="icon"
                  onSuccess={loginWithGoogle}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />

                <FacebookLogin
                  className="bg-[#4267b2] hover:bg-[#4267b2]/95 p-2 rounded flex  text-white   items-center  gap-x-1"
                  appId="448147154061589"
                  onSuccess={(response) => {
                    // console.log('Login Success!', response);
                  }}
                  onFail={(error) => {
                    console.log("Login Failed!", error);
                  }}
                  onProfileSuccess={loginWithFacebook}
                >
                  <FaFacebook className="w-5 h-5" />
                </FacebookLogin>
              </div>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Don't have an account? &nbsp;
                <Link to={'/Register'} className={"text-blue-700 underline"}>Signup</Link>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </motion.div>

  )
}
