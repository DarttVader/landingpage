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
    <nav className="flex inset-0 justify-between bg-fugente border-b-2 border-black/30 shadow-2xl 
      z-1 w-full h-20 min-w-70 overflow-hidden"
      id="NavBar">
      <Logo />
      <MenuClose isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuOpen isOpen={isOpen} />
    </nav>
  );
};

export default NavBar;
