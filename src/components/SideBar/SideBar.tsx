"use client";
import { MenuIcon, MenuIconX } from "@/exports";
import { motion } from "framer-motion";
import Cinzel from "next/font/local";
import { useState } from "react";

const FontCinzel = Cinzel({
  src: "../../fonts/Cinzel/Cinzel-Regular.otf",
  variable: "--cinzel-regular",
});

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    /* ------------- TOPO DA PÁGINA(NAVBAR) ------------- */
    <div className="flex h-[3.5rem] w-full">
      <motion.nav
        /* -------------------------- */ 
        className={`${isOpen ? 'bg-white' : 'bg-transparent' } fixed antialiased p-[0.20rem] rounded-br-md flex-col`}
        initial={{ 
          y: -10, 
        }}
        whileInView={{
          y: 0
        }}
        animate={{
          width: isOpen ? "16rem" : "3rem",
          height: isOpen ? "16rem" : "3.5rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          key={isOpen ? "open" : "closed"}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            rotate: isOpen ? 90 : 0,
            transition: { duration: 0.2, ease: "easeInOut" },
            position: "fixed"
          }}
        >
          {/* ------------- ÍCONE DO BOTÃO DA NAVBAR ------------- */}
          {isOpen ? ( <MenuIconX
            x="0px"
            y="0px"
            width={50}
            height={48}
            id="Capa_1"
            fill="#5d4632"
            version="1.1"
            onClick={toggleMenu}
            xmlSpace="preserve"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className=" rounded-md py-2"/>

          ) : ( <MenuIcon
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 23 23"
            fill="#5d4632"
            width={50}
            height={48}
            className="rounded-md p-1"/>
          )}

        </motion.div>

        {/* ------------- LISTA DE ROTAS QUANDO ABRE A NAVBAR ------------- */}
        <motion.div
          className="flex-grow pt-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.5 }}
        >
          <ul className="my-4 pr-1 text-xl">
            {["HOME", "SERVIÇOS", "SOBRE", "CONTATOS"].map((item, index) => (
              <motion.li
                key={item}
                className="pl-2 py-1 my-[2px] cursor-pointer rounded-sm transition-all ease-in-out duration-300 
                  hover:py-2 hover:bg-[#7C654F]/30 hover:border-b hover:border-b-[#7C654F]/60"
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isOpen ? 0 : -20,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* ------------- TÍTULO DA NAVBAR ------------- */}
      <h1
        className={`${FontCinzel.variable} font-cinzel text-4xl text-center content-center mx-auto`}
      >
        Rafaela Mazieiro
      </h1>
    </div>
  );
};

export default Sidebar;



