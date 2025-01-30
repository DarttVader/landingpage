"use client"
import { IconMenu, IconMenuX } from "@/exports";
import { motion } from "framer-motion";
import Cinzel from "next/font/local";
import Image from "next/image";
import { useState } from "react";

const FontCinzel = Cinzel({
  src: "../../fonts/Cinzel/static/Cinzel-Regular.ttf",
  variable: "--cinzel-static", 
});

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prevState => !prevState);

  return (
    <motion.nav className={`${FontCinzel.variable} font-cinzel justify-between flex w-full bg-slate-700`}
      initial= {{

      }} 
      >
      <Image src="/logonav.png" alt="Logo de Rafaela Mazieiro" width={200} height={200} className="cursor-pointer"/>

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}

      <motion.div onClick={toggleMenu} className= { /* FECHADO */ ` cursor-pointer mt-5 mr-5 rounded-md hover:bg-white/10 w-[50px] h-[50px]`}>
        <IconMenu className={ /* FECHADO */ ` rounded-md text-[#DE9091] p-1`} width="50" height="50"></IconMenu>
        <IconMenuX className={ /* FECHADO */ `  border rounded-md text-[#DE9091] p-1`} width="50" height="50"></IconMenuX>
      </motion.div>
    </motion.nav>
  );
};