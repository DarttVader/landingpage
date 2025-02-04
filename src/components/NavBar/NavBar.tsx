"use client"
import { IconMenu } from "@/exports";
import { easeInOut, motion } from "framer-motion";
import Cinzel from "next/font/local";
import Link from "next/link";
import { useState } from "react";

interface NavBarProps {
  setMenuOpen: (open: boolean) => void;
};

const FontCinzel = Cinzel({
  src: "../../fonts/Cinzel/static/Cinzel-Regular.ttf",
  variable: "--cinzel-static"
});

export default function NavBar({ setMenuOpen }: NavBarProps) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setMenuOpen(newState);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeInOut }}
      className={`justify-between bg-[#d3b799]/60 h-24 flex w-full`}
    >
      <h1 className={`${FontCinzel.variable} font-cinzel text-[#714d35] ml-2 text-4xl content-center text-center`}>Rafaela Mazieiro</h1>
      {/* <Image src="/logo.png" alt="Logo de Rafaela Mazieiro" width={212} quality={100} unoptimized 
      height={96} className="cursor-pointer max-h-[200px] p-1" /> */}

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}
      <motion.div className={`transition-all ease-in-out duration-300 ${isOpen ?
        /* ABERTO */ "w-[30dvh] rounded-bl-sm right-0 top-0 mr-0 backdrop-blur-md z-50 fixed h-full" :
        /* FECHADO */ "cursor-pointer rounded-md w-[50px] h-[50px] justify-items-center self-center mr-5"}`}
        initial={{ y: -20 }}
        animate={{ y: 0 }}>

        <IconMenu className={`group ${isOpen ?
          /* ABERTO */ "hidden" :
          /* FECHADO */ "rounded-md text-[#714d35] hover:scale-105 p-1"}`}

          onClick={toggleMenu} width="50" height="50"></IconMenu>

        <motion.ul className={isOpen ?
          /* ABERTO */ "text-[#714d35] text-2xl text-center py-6 gap-4 flex flex-col" :
          /* FECHADO */ "hidden"}

          initial={{ x: isOpen ? -20 : 0, opacity: isOpen ? 0 : 1 }}
          animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: easeInOut }}>
          <button onClick={toggleMenu} className={"hover:bg-black/10 py-2"}>Fechar</button>
          <Link href="/" className={"hover:bg-black/10 py-2"}>Inicio</Link>
          <Link href="/About" className={"hover:bg-black/10 py-2"}>Sobre</Link>
          <Link href="/Contacts" className={"hover:bg-black/10 py-2"}>Contatos</Link>

        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};