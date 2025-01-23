"use client"
import MenuIcon from "@/exports";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav className={`antialiased rounded-br-sm flex flex-col mt-1 ml-1 pb-2 shadow-rounded-sm h-12 w-12
    transition-all duration-500 ease-out ${isOpen ? 'fixed' : 'fixed h-[220px] w-64 mt-0 ml-0 bg-[#F0E3DB]'}`}>
      <button onClick={toggleMenu} className={`${isOpen ? 'fixed' : 'fixed'} justify-items-center rounded-md py-1 px-1`}>
        <MenuIcon fillRule="evenodd" color="#6F5941" className={`${isOpen ? 'transition-all duration-300 ease-in-out hover:bg-black/10 rounded-lg h-12 w-12' : 'h-12 w-12'} `} />
      </button>
      <div className={`flex-grow transition-opacity ease-in-out duration-300 ${isOpen ? 'hidden pt-10' : 'pt-10'}`}>
        <ul className="my-4 pr-1 text-xl">
          <li className="pl-2 py-1 my-[2px] cursor-pointer rounded-sm transition-all ease-in-out duration-300 hover:py-2 hover:bg-[#7C654F]/30 hover:border-b hover:border-b-[#7C654F]/60">Home</li>
          <li className="pl-2 py-1 my-[2px] cursor-pointer rounded-sm transition-all ease-in-out duration-300 hover:py-2 hover:bg-[#7C654F]/30 hover:border-b hover:border-b-[#7C654F]/60">Serviços</li>
          <li className="pl-2 py-1 my-[2px] cursor-pointer rounded-sm transition-all ease-in-out duration-300 hover:py-2 hover:bg-[#7C654F]/30 hover:border-b hover:border-b-[#7C654F]/60">Sobre</li>
          <li className="pl-2 py-1 my-[2px] cursor-pointer rounded-sm transition-all ease-in-out duration-300 hover:py-2 hover:bg-[#7C654F]/30 hover:border-b hover:border-b-[#7C654F]/60">Contatos</li>
        </ul>
      </div>
      <div className="justify-items-end justify-end bg-black border border-white w-4 h-4">

      </div>
    </nav>
  );
};
