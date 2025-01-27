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
    <div className="flex h-[3.5rem] w-full">
      <motion.nav
        /* ------------- TOPO DA PÁGINA(NAVBAR) ------------- */
        className="fixed antialiased p-[0.20rem] rounded-br-sm flex flex-col"
        initial={{ width: "3rem", height: "3.5rem", backgroundColor: `#624D46 ${isOpen ? "#eae0d5" : "#eae0d5"}` }}
        animate={{
          width: isOpen ? "16rem" : "3rem",
          height: isOpen ? "20rem" : "3.5rem",
          backgroundColor: isOpen ? "#ffffff" : "",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {/* ------------- BOTÃO DA NAVBAR ------------- */}
        <motion.div
          transition={{
            duration: 0.3,
          }}
        >
          {/* ------------- ÍCONE DO BOTÃO DA NAVBAR ------------- */}
          <div className="border rounded-md w-[50px]">
          <MenuIcon
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 26 26"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            width={48}
            height={48}
            className="rounded-md border pl-[2px] border-black"
          />
          </div>
          <MenuIconX
            x="0px"
            y="0px"
            width={18}
            height={18}
            id="Capa_1"
            version="1.1"
            xmlSpace="preserve"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          />

        </motion.div>

        {/* ------------- LISTA DE ROTAS QUANDO ABRE A NAVBAR ------------- */}
        <motion.div
          className="flex-grow pt-7"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.5 }}
        >
          <ul className="my-4 pr-1 text-xl">
            {["Home", "Serviços", "Sobre", "Contatos"].map((item, index) => (
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



