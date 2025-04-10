"use client";
import { handleScroll, useClickOutside } from "@/exports";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface OpenMenuProps {
  isOpen?: boolean;
  isUlOpen: boolean;
  toggleMenu: () => void; // Função de abrir/fechar Menu
  setIsUlOpen: React.Dispatch<React.SetStateAction<boolean>>; // Função para abrir a parte de consultas
  children?: React.ReactNode; // Passa o MenuClose como filho
};

const MenuOpen: React.FC<OpenMenuProps> = React.memo(({ isOpen, toggleMenu, isUlOpen, setIsUlOpen, children }) => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  // Fecha o menu quando clica fora
  useClickOutside(menuRef, toggleMenu);

  const handleClick = () => {
    setIsUlOpen((prev) => !prev);
  };

  if (!isOpen) return children;

  return (
    <ul
      ref={menuRef}
      className={`
        flex flex-col fixed h-screen text-3xl bg-vinho-escuro pt-10 rounded-l-xl top-0 z-40 
        right-0 text-center justify-start font-display text-rosa-claro tracking-widest shadow-2xl 
        drop-shadow-2xl shadow-black select-none
        ${isOpen ? `opacity-100 translate-x-0` : `translate-x-56 opacity-0 pointer-events-none`}
      `}
    >
      {children}
      <li
        onClick={(e) => handleScroll("section-contacts", e)}
        className="cursor-pointer py-2 hover:rounded-3xl hover:contrast-125 hover:bg-black/30">
        Contatos
      </li>
      <li
        onClick={handleClick}
        className={`flex justify-between items-center cursor-pointer py-1 group hover:contrast-125 
          ${isUlOpen ? `rounded-t-3xl bg-rosa-claro text-black/50 hover:bg-black/50 
          hover:text-rosa-claro` : `hover:rounded-3xl hover:bg-black/30`}`}>
        <span className="w-full text-center ml-14">
          Consultas
        </span>
        <IoIosArrowDown size={60}
          className={`inline-flex text-black/50 mr-6 mt-1 transition-all ease-in-out h-fit w-fit
            duration-200 ${isUlOpen ? `rotate-180 group-hover:text-rosa-claro` :
              `group-hover:text-rosa-claro`}`} />
      </li>
      <ul className={`text-black/50 tracking-wide transition-opacity ease-in-out duration-500 
        ${isUlOpen ? `flex flex-col bg-rosa-claro py-2 rounded-b-3xl` : `hidden`}`}>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=5543999684679&text&type=phone_number&app_absent=0"
          className="hover:rounded-3xl hover:contrast-125 hover:bg-black/50 hover:text-rosa-claro
            p-2">
          Pitanga
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=5543996134770&text&type=phone_number&app_absent=0"
          className="hover:rounded-3xl hover:contrast-125 hover:bg-black/50 hover:text-rosa-claro
            p-2">
          Manoel Ribas
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=5543998130857&text&type=phone_number&app_absent=0"
          className="hover:rounded-3xl hover:contrast-125 hover:bg-black/50 hover:text-rosa-claro
            p-2">
          Ivaiporã
        </Link>
      </ul>
      <li
        onClick={(e) => handleScroll("section-cards", e)}
        className="cursor-pointer py-2 px-8 hover:rounded-3xl hover:contrast-125 hover:bg-black/30">
        Tratamentos
      </li>
    </ul>
  );
});

MenuOpen.displayName = "MenuOpen";
export default MenuOpen;




