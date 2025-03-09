"use client";
import { Logo, MenuClose, MenuOpen, TopClick } from "@/exports";
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
    <nav className="flex inset-0 p-0.5 justify-between bg-bege-rose z-2 w-full min-h-10 min-w-70">
      <Logo />
      <MenuClose isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuOpen isOpen={isOpen} />
      <TopClick />
    </nav>
  );
};

export default NavBar;
