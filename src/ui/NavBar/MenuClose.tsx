import { spanHandleClick } from "@/exports";

interface CloseMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuClose: React.FC<CloseMenuProps> = ({ isOpen, toggleMenu, }) => {
  // Modificar a função toggleMenu para rolar para o topo antes de abrir o menu
  const handleToggleMenu = () => {
    spanHandleClick();
    toggleMenu(); // Alterna o estado do menu
  };
  return (
    <div
      onClick={handleToggleMenu} // Aciona o click
      className={`flex flex-col cursor-pointer rounded-md justify-between p-1 py-2 mr-2 self-center 
        shadow-2xl drop-shadow-2xl relative hover:contrast-125 transform transition-transform ease-in-out
        duration-1000 
        ${isOpen ? `w-8 h-8 z-50 hover:bg-black/30 mb-4` :
          `w-11 h-11 hover:size-12`}`}
    >
      <div
        className={`h-0.1 bg-rosa-claro rounded-3xl self-end transition-all duration-500 ease-in-out
          ${isOpen ? "w-full rotate-45 translate-y-1,5" : "w-10/12 translate-y-0 rotate-0"}`}
      />
      <div
        className={`w-full h-0.2 bg-rosa-claro rounded-3xl transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}`}
      />
      <div
        className={`w-full h-0.1 bg-rosa-claro rounded-3xl transition-all duration-500 ease-in-out
          ${isOpen ? "-rotate-45 -translate-y-1,5" : "translate-y-0 rotate-0"}`}
      />
    </div>
  );
};

export default MenuClose;

