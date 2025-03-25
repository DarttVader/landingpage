"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface OpenMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuOpen: React.FC<OpenMenuProps> = ({ isOpen, toggleMenu }) => {

  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    // Verifica se foi clicado fora do componente 
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(); // Fecha o menu ao clicar fora
      };
    };
    if (isOpen) {
      // Se o menu está aberto, escuta os cliques no documento
      document.addEventListener("mousedown", handleClickOutside);
    };
    return () => {
      // Remove a escuta de evento ao desmontar o componente ou quando o menu fechar
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Se o menu não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <motion.ul
      ref={menuRef} // Referencia
      exit={{ x: 600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 600, opacity: 0 }}
      transition={{ duration: 1, ease: easeInOut, type: keyframes }}
      className="flex flex-col fixed w-56 h-screen text-2xl bg-cinza-claro pt-18 rounded-l-xl top-0 z-9 
      right-0 text-center justify-start">
      <li>
        <a href="#" className="hover:brightness-150 py-2" >
          Início
        </a>
      </li>
      <li>
        <a href="/About" className="hover:brightness-150 py-2">
          Sobre Mim
        </a>
      </li>
      <li>
        <a href="/Contacts" className="hover:brightness-150 py-2">
          Contatos
        </a>
      </li>
    </motion.ul>
  );
};

export default MenuOpen;


