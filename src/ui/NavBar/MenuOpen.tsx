"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface OpenMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuOpen: React.FC<OpenMenuProps> = ({ isOpen, toggleMenu, setIsAnimating }) => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(); // Fecha o menu ao clicar fora
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  const handleAnimationComplete = () => {
    setIsAnimating(false); // Alterna para false quando animação termina
  };

  const handleScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const Section = document.getElementById(id);
    if (Section) {
      Section.scrollIntoView({ behavior: "smooth" });
    };
    toggleMenu(); // Fecha o menu após clicar
  };

  if (!isOpen) return null;

  return (
    <motion.ul
      ref={menuRef}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      initial={{ x: 600, opacity: 0, scale: 1.1 }}
      onAnimationStart={() => setIsAnimating(true)} // Marca o início da animação
      onAnimationComplete={handleAnimationComplete} // Marca o final da animação
      transition={{ duration: 0.8, ease: easeInOut, type: keyframes, delay: 0.1 }}
      className="flex flex-col fixed h-screen text-3xl bg-vinho-escuro pt-18 rounded-l-xl top-0 z-40 
      right-0 text-center justify-start font-display text-rosa-claro tracking-widest"
    >
      <li
        className="cursor-pointer py-1 hover:rounded-3xl hover:contrast-125 hover:bg-black/30">
        Inicio
      </li>
      <li
        onClick={(e) => handleScroll("section-contacts", e)}
        className="cursor-pointer py-1 hover:rounded-3xl hover:contrast-125 hover:bg-black/30">
        Contatos
      </li>
      <li
        onClick={(e) => handleScroll("section-queries", e)}
        className="cursor-pointer py-1 hover:rounded-3xl hover:contrast-125 hover:bg-black/30">
        Consultas
      </li>
      <li
        onClick={(e) => handleScroll("section-cards", e)}
        className="cursor-pointer py-1 px-8 hover:rounded-3xl hover:contrast-125 hover:bg-black/30">
        Tratamentos
      </li>
    </motion.ul>
  );
};

export default MenuOpen;




