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
    <nav className="flex fixed inset-0 justify-between z-[2] w-full h-20 min-w-[17.5rem]">
      <Logo />
      <MenuClose isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuOpen isOpen={isOpen} />
    </nav>
  );
};

export default NavBar;
