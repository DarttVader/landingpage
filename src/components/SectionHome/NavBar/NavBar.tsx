"use client"
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className={`${isOpen ? "" : ""}justify-between shadow-2xl inset-0 border-b-2 border-[#8B3A3A] bg-[url(/fundo1.jpg)] bg-cover bg-center backdrop-blur-3xl flex`}>
      <Link href="/">
        <Image src="/logo1.png" alt="Logo de Rafaela Mazieiro" width={211} height={96} quality={100} unoptimized
          className="m-2 hover:scale-105 hover:opacity-50" />
      </Link>

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}
      <motion.div onClick={toggleMenu}
        className={isOpen ?
          /* ABERTO */ "" :
          /* FECHADO */ "group content-center hover:scale-105 cursor-pointer rounded-md w-[50px] h-[50px] self-center mr-5 flex flex-col justify-between hover:opacity-50 px-1 py-2"
        }>

        <div className={isOpen ? "hidden" : "bg-[#8B3A3A] h-[3px] group-hover:-translate-y-[2px]"}></div>
        <div className={isOpen ? "hidden" : "bg-[#8B3A3A] h-[3px]"}></div>
        <div className={isOpen ? "hidden" : "bg-[#8B3A3A] h-[3px] group-hover:translate-y-[2px]"}></div>

        <motion.ul className={isOpen ?
            /* ABERTO */ "text-white text-2xl backdrop-blur-3xl absolute w-44 rounded-bl-sm top-0 right-0 text-center py-6 gap-4 flex flex-col" :
            /* FECHADO */ "hidden"}
          initial={{ x: isOpen ? -20 : 0, opacity: isOpen ? 0 : 1 }}
          animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: easeInOut }}>
          <button onClick={toggleMenu} className={"hover:bg-black/10 py-2"}>Fechar</button>
          <Link href="/" className="hover:bg-black/10 py-2">Inicio</Link>
          <Link href="/About" className="hover:bg-black/10 py-2">Sobre Mim</Link>
          <Link href="/Contacts" className="hover:bg-black/10 py-2">Contatos</Link>
        </motion.ul>

      </motion.div>
    </motion.nav>
  );
};

export default NavBar;