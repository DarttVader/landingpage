"use client";
import { NavBar, SectionMain } from "@/exports";
import { useState } from "react";

const MenuProvider = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUlOpen, setIsUlOpen] = useState(false);
  return (
    <>
      <NavBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isUlOpen={isUlOpen} setIsUlOpen={setIsUlOpen} />
      <SectionMain setIsMenuOpen={setIsMenuOpen} setIsUlOpen={setIsUlOpen} />
    </>
  );
};

export default MenuProvider;
