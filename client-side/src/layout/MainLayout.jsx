import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer";

export default function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
