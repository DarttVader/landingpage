"use client"
import { IconMenu } from "@/exports";
import { easeInOut, motion } from "framer-motion";
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
    <motion.nav className={`${FontCinzel.variable} font-cinzel justify-between h-24 flex w-full bg-[#714D35]`}
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: easeInOut }}>

      <Image src="/logo.png" alt="Logo de Rafaela Mazieiro" width={212} height={96} className="cursor-pointer 
        max-h-[200px] p-1" />

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}
      <motion.div className={isOpen ?
        /* ABERTO */ "w-[30dvh] mt-0 bg-[#B79685] transition-all duration-300 z-50 fixed right-0 h-[46.5dvh] " :
        /* FECHADO */ "cursor-pointer mt-5 mr-5 transition-all duration-300 rounded-md hover:bg-white/10 w-[50px] h-[50px]"}>

        <IconMenu className={isOpen ?
          /* ABERTO */ "hidden" : 
          /* FECHADO */ "rounded-md text-[#DE9091] p-1"}
          onClick={toggleMenu} width="50" height="50"></IconMenu>

        <motion.ul className={isOpen ?
          /* ABERTO */ "text-black text-2xl text-center py-6 gap-4 flex flex-col" :
          /* FECHADO */ "hidden"}
          initial={{ x: isOpen? -40 : 0, opacity: isOpen? 0 : 1 }}
          animate={{ x: isOpen ? 0 : -40, opacity: isOpen? 1 : 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}>
          <button onClick={toggleMenu} className={isOpen ? /* ABERTO */ "hover:bg-black/10 py-2" : /* FECHADO */ "hidden transition-all duration-300"}>Fechar</button>
          <Link href="/"/* HOME */ className={isOpen ? /* ABERTO */ "hover:bg-black/10 py-2" : /* FECHADO */ ""}>Inicio</Link>
          <Link href="/Sobre" className={isOpen ? /* ABERTO */ "hover:bg-black/10 py-2" : /* FECHADO */ ""}>Sobre</Link>
          <Link href="/Contatos" className={isOpen ? /* ABERTO */ "hover:bg-black/10 py-2" : /* FECHADO */ ""}>Contatos</Link>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};