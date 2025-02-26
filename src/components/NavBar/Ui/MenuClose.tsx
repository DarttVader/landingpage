"use client"
import { easeInOut, keyframes, motion } from "framer-motion";

interface CloseMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuClose: React.FC<CloseMenuProps> = ({ isOpen, toggleMenu }) => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: easeInOut, type: keyframes }}
      onClick={toggleMenu}
      className={`
    flex flex-col group mr-4 self-center py-2 px-1 cursor-pointer transition-all duration-300 ease-in-out justify-between w-[52px] h-[52px] 
    ${isOpen ? `fixed right-0 z-[3]` : `relative`}
  `}
    >
      <div
        className={`${isOpen ? "" : ""
          } h-[3px] w-full bg-red-wine transform rounded-xl transition-transform ease-in-out duration-300 group-hover:-rotate-45 group-hover:translate-y-[16.2px]`}
      ></div>

      <div
        className={`${isOpen ? "group-hover:hidden " : ""
          } h-[3px] w-full bg-red-wine rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-0`}
      ></div>

      <div
        className={`${isOpen ? "" : ""
          } h-[3px] w-full bg-red-wine transform rounded-xl transition-transform ease-in-out duration-300 group-hover:rotate-45 group-hover:-translate-y-[16.2px]`}
      ></div>
    </motion.div>
  );
};

export default MenuClose;
