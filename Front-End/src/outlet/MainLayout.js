import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function UserEnd() {
  return (
    <>
      <Header />
      <div className="lg:pt-[87px] md:pt-16 pt-16">

      <Outlet />
      </div>
      <Footer/>
    </>
  );
}
