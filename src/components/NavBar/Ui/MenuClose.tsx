"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
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
    };

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
      transition={{ duration: 0.25, ease: easeInOut, type: keyframes }}
      className={`flex flex-col cursor-pointer rounded-md justify-between p-1 py-2 mr-2 self-center
        ${isOpen ? "fixed right-0 z-3 w-8 h-8" : "relative w-11 h-11 hover:size-12 hover:contrast-125"}`}>
      <motion.div
        transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
        className={`h-0.1 bg-rosa-claro rounded-3xl self-end ${isOpen ? "w-full" : "w-10/12"}`}
        animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? "0.40rem" : 0 }} />
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2, ease: easeInOut, type: keyframes }}
        className="w-full h-0.2 bg-rosa-claro rounded-3xl" />
      <motion.div
        transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
        className="w-full h-0.1 bg-rosa-claro rounded-3xl"
        animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? "-0.40rem" : 0 }} />
    </motion.div>
  );
};

export default MenuClose;
