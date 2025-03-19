"use client";
import { Logo, MenuClose, MenuOpen } from "@/exports";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <nav id="navbar" className="flex inset-0 justify-between bg-fundo bg-center bg-cover border-b-2 
      border-rosa-claro/70 shadow-2xl z-1 w-full min-w-70 h-24 min-h-20 overflow-hidden lg:h-20">
      <Logo />
      <MenuClose isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuOpen isOpen={isOpen} />
    </nav>
  );
};

export default NavBar;
