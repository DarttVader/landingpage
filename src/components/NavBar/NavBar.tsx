"use client";
import { Logo, MenuClose, MenuOpen } from "@/exports";
import { useEffect, useRef, useState } from "react";

interface NavBarProps {
  isOpen: boolean; // Recebe o estado do menu aberto
  isUlOpen: boolean; // Recebe o estado da lista fechada(inicialmente)
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Função para alternar o estado
  setIsUlOpen: React.Dispatch<React.SetStateAction<boolean>>; // Função para abrir a parte de consultas
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, setIsOpen, isUlOpen, setIsUlOpen }) => {
  // Estado que controla se o menu está aberto ou fechado

  // Estado que controla se uma animação está em andamento
  const [isAnimating, setIsAnimating] = useState(false);

  // Referência para toggleMenu
  const toggleMenuRef = useRef<(() => void) | null>(null);

  // Função que alterna o estado do menu (abre ou fecha) e impede alterações durante a animação
  const toggleMenu = () => {
    if (isAnimating) return; // Não alterna o menu se a animação estiver em andamento
    setIsOpen((prev) => !prev); // Alterna entre aberto e fechado
  };

  // Efeito para adicionar ou remover a classe overflow-hidden no body conforme o estado do menu
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) {
        document.body.classList.add("overflow-hidden"); // Impede o scroll quando o menu está aberto
      } else {
        document.body.classList.remove("overflow-hidden"); // Libera o scroll quando o menu está fechado
      };
    };
  }, [isOpen]); // O efeito é acionado sempre que isOpen mudar (abrir/fechar o menu)

  toggleMenuRef.current = toggleMenu;

  return (
    <nav className="flex inset-0 justify-between bg-fundo bg-center bg-cover border-b-2 border-rosa-claro/70
      shadow-2xl drop-shadow-xl shadow-fugente w-full min-w-52 h-18 min-h-18 relative z-30">
      <Logo />
      <MenuOpen
        isOpen={isOpen} // Passa o estado de "menu aberto" para o MenuOpen
        isUlOpen={isUlOpen}
        toggleMenu={toggleMenu} // Passa a função para alternar o estado do menu
        setIsAnimating={setIsAnimating} /* Passa a função para controlar o estado da animação */
        setIsUlOpen={setIsUlOpen}>
        <MenuClose
          isOpen={isOpen} // Passa o estado de "menu aberto" para o MenuClose
          toggleMenu={toggleMenu} // Passa a função para alternar o estado do menu
        />
      </MenuOpen>
    </nav>
  );
};

export default NavBar;
