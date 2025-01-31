"use client"
import { IconMenu } from "@/exports";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavBarProps {
  setMenuOpen: (open: boolean) => void;
}

export default function NavBar({ setMenuOpen }: NavBarProps) {

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
    transition={{ duration: 0.8, ease: easeInOut }}
    className={`${isOpen ? "scale-110" : "mr-20"} justify-between bg-[#C49A6C]/60 h-24 flex w-full`}
    >

      <Image src="/logo.png" alt="Logo de Rafaela Mazieiro" width={212} quality={100} unoptimized 
      height={96} className="cursor-pointer max-h-[200px] p-1" />

      {/* ------------------------------------ MENU HAMBURGER ------------------------------------ */}
      <motion.div className={`transition-all duration-300 ${isOpen ? 
        /* ABERTO */ "w-[30dvh] rounded-bl-sm mt-0 bg-[#DE9091] z-50" + 
        "fixed right-0 h-[46.5dvh] " :
        /* FECHADO */ "cursor-pointer mt-5 mr-5 rounded-md" + 
        "hover:bg-white/10 w-[50px] h-[50px]"}`}>

        <IconMenu className={isOpen ?
          /* ABERTO */ "hidden" : 
          /* FECHADO */ "rounded-md text-[#DE9091] p-1"}
          onClick={toggleMenu} width="50" height="50"></IconMenu>

        <motion.ul className={isOpen ?
          /* ABERTO */ "text-black text-2xl text-center py-6 gap-4 flex flex-col" :
          /* FECHADO */ "hidden"}
          initial={{ x: isOpen? -40 : 0, opacity: isOpen? 0 : 1 }}
          animate={{ x: isOpen ? 0 : -40, opacity: isOpen? 1 : 0 }}
          transition={{ duration: 0.3, ease: easeInOut }}>
          <button onClick={toggleMenu} className={isOpen ? 
            /* ABERTO */ "hover:bg-black/10 py-2" : 
            /* FECHADO */ ""}>Fechar</button>
          <Link href="/"/* HOME */ className={isOpen ? 
            /* ABERTO */ "hover:bg-black/10 py-2" : 
            /* FECHADO */ ""}>Inicio</Link>
          <Link href="/About" className={isOpen ? 
            /* ABERTO */ "hover:bg-black/10 py-2" : 
            /* FECHADO */ ""}>Sobre</Link>
          <Link href="/Contacts" className={isOpen ? 
            /* ABERTO */ "hover:bg-black/10 py-2" : 
            /* FECHADO */ ""}>Contatos</Link>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};