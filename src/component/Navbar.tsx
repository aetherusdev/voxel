"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const items = [
    {
      label: "Product",
      href: "",
    },
    {
      label: "Regular classes",
      href: "",
    },
    {
      label: "online tutorials",
      href: "",
    },
    {
      label: "About us",
      href: "",
    },
  ];
  return (
    <motion.div
      initial={{ y: "-200px" }}
      animate={{ opacity: 1, y: "0px" }}
      className="
  bg-black/3 backdrop-blur-xl
  mt-10 border border-white/10
  py-2 rounded-[60px] mx-auto w-[90%] md:w-[80%] 
  px-6 flex items-center justify-between
  shadow-xs shadow-black/10a
"
    >
      <div className="logo">
        {/* <h3 className="text-primary italic font-open-sauce">Vicky Akku</h3> */}
        <Image
          src={"/image/logo.png"}
          className="size-12"
          alt="img"
          height={100}
          width={100}
        />
      </div>
      <div className=" hidden md:flex items-center gap-12">
        {items.map((e, i) => (
          <div
            key={i}
            className="font-open-sauce capitalize text-[#656565] text-sm"
          >
            <Link href={e.href}>{e.label}</Link>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <Button className="rounded-full bg-primary transition-all duration-300 cursor-pointer">
          Log in
        </Button>
      </div>
      <div className="block md:hidden">
        <Button className=" cursor-pointer rounded-full ">
          <Menu className="size-4 text-white " />
        </Button>
      </div>
    </motion.div>
  );
}

export default Navbar;
