import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
// import Navbar from '../component/Navbar'

function Rootayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative flex-col bg-hero ">
      <div className=" absolute w-full">
        <Navbar />
      </div>
      {children}
      <Footer/>
    </div>
  );
}

export default Rootayout;
