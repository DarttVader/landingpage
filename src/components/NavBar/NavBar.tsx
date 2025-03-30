"use client"
import { Logo, MenuClose, MenuOpen } from "@/exports";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isAnimating) return;
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
    <nav className="flex inset-0 justify-between bg-fundo bg-center bg-cover border-b-2 border-rosa-claro/70
      shadow-2xl drop-shadow-xl w-full min-w-52 h-18 min-h-18 relative z-30">
      <Logo />
      <MenuClose
        isOpen={isOpen}
        toggleMenu={toggleMenu} />
      <MenuOpen
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        setIsAnimating={setIsAnimating} />
    </nav>
  );
};

export default NavBar;
