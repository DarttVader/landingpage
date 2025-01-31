"use client"
import { IconMenu } from "@/exports";
import { motion } from "framer-motion";
import Cinzel from "next/font/local";
import Image from "next/image";
import Link from "next/link";
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
      initial={{

      }}
    >
      <Image src="/logo.png" alt="Logo de Rafaela Mazieiro" width={200} height={200} className="cursor-pointer 
        max-h-[200px] p-1" />

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}

      <motion.div className={isOpen ?
        /* ABERTO */ "w-72 mt-0 bg-white h-full " :
        /* FECHADO */ "cursor-pointer mt-5 mr-5 rounded-md hover:bg-white/10 w-[50px] h-[50px]"}>

        <IconMenu className={isOpen ?
          /* ABERTO */ "hidden" :
          /* FECHADO */ "rounded-md text-[#DE9091] p-1"}
          onClick={toggleMenu} width="50" height="50"></IconMenu>

        <motion.ul className={isOpen ?
          /* ABERTO */ "" :
          /* FECHADO */ "hidden"}>
          <Link href="">Inicio</Link>
          <Link href=""></Link>
          <Link href="">Sobre</Link>
          <Link href="">Contatos</Link>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};