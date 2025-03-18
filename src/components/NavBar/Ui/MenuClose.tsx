"use client";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CloseMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuClose: React.FC<CloseMenuProps> = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Função para detectar clique fora do menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(); // Fecha o menu
      }
    };

    // Adiciona o evento quando o menu estiver aberto
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Remove o evento ao desmontar ou quando o menu for fechado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <motion.div
      ref={menuRef}
      onClick={toggleMenu}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: easeInOut }}
      className={`flex flex-col group cursor-pointer rounded-md justify-between p-1 py-2 mr-2 self-center
        ${isOpen ? "fixed right-0 z-3 w-8 h-8" : "relative w-11 h-11 hover:contrast-75"}`}>
      <motion.div
        className="w-full h-0.1 bg-white rounded-3xl group-hover:brightness-150"
        animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? "0.45rem" : 0 }}
        transition={{ duration: 0.3, ease: easeInOut }} />
      <motion.div
        className="w-full h-0.2 bg-white rounded-3xl group-hover:brightness-150"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2, ease: easeInOut }} />
      <motion.div
        className="w-full h-0.1 bg-white rounded-3xl group-hover:brightness-150"
        animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? "-0.45rem" : 0 }}
        transition={{ duration: 0.3, ease: easeInOut }} />
    </motion.div>
  );
};

export default MenuClose;
