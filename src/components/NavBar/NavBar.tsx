"use client"
import { Logo, MenuClose, MenuOpen } from "@/exports";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Alterna entre aberto e fechado
  };

  useEffect(() => {
    if (isOpen) { document.body.classList.add("overflow-hidden") } //Tira barra de scroll
    else { document.body.classList.remove("overflow-hidden") } //Volta barra de scroll
  }, [isOpen]);

  return (
    <nav className="flex inset-0 justify-between bg-fundo bg-center bg-cover border-b-2 border-rosa-claro/70
      shadow-2xl drop-shadow-xl w-full min-w-52 h-18 min-h-18 z-5 relative">
      <Logo />
      <MenuClose isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuOpen isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default NavBar;
