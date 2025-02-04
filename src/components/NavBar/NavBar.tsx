"use client"
import { easeInOut, motion } from "framer-motion";
import Cinzel from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavBarProps {
  setMenuOpen: (open: boolean) => void;
};

const FontCinzel = Cinzel({
  src: "../../fonts/Cinzel/static/Cinzel-Regular.ttf",
  variable: "--cinzel-static"
});

const NavBar = ({ setMenuOpen }: NavBarProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setMenuOpen(newState);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      className={`justify-between bg-[#C49A6C] h-full flex w-full`}>

      <Link href="/">
        <Image src="/logo2.png" alt="Logo de Rafaela Mazieiro" width={211} height={96} quality={100} unoptimized className="m-2 hover:opacity-50"
          sizes="(max-width: 1280px) 211px, (max-width: 1024px) 180px, (max-width: 768px) 150px, (max-width: 640px) 50px"/>
      </Link>

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}
      <motion.div onClick={toggleMenu}
        className={isOpen ? 
          /* ABERTO */ "w-[22dvh] sm:w-[25dvh] lg:w-[35dvh] xl:-[35dvh] right-0 top-0 mr-0 backdrop-blur-md z-50 fixed" :
          /* FECHADO */ "group content-center cursor-pointer rounded-md w-[50px] h-[50px] self-center mr-5 flex flex-col justify-between hover:opacity-50 px-1 py-2"}>
          <div className={isOpen ? "hidden" : "bg-[#714d35] h-[3px] group-hover:-translate-y-[2px]"}></div>
          <div className={isOpen ? "hidden" : "bg-[#714d35] h-[3px]"}></div>
          <div className={isOpen ? "hidden" : "bg-[#714d35] h-[3px] group-hover:translate-y-[2px]"}></div>  

        <motion.ul className={isOpen ?
          /* ABERTO */ "text-[#714d35] text-2xl text-center py-6 gap-4 flex flex-col" :
          /* FECHADO */ "hidden"}

          initial={{ x: isOpen ? -20 : 0, opacity: isOpen ? 0 : 1 }}
          animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: easeInOut }}>
          <button onClick={toggleMenu} className={"hover:bg-black/10 py-2"}>Fechar</button>
          <Link href="/" className="hover:bg-black/10 py-2">Inicio</Link>
          <Link href="/About" className="hover:bg-black/10 py-2">Sobre</Link>
          <Link href="/Contacts" className="hover:bg-black/10 py-2">Contatos</Link>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;