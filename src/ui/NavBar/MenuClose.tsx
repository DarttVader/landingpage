"use client"
import { easeInOut, keyframes, motion } from "framer-motion";

interface CloseMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuClose: React.FC<CloseMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <motion.div
      onClick={toggleMenu} // Aciona o click
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: easeInOut, type: keyframes }}
      className={`flex flex-col cursor-pointer rounded-md justify-between p-1 py-2 mr-2 self-center shadow-2xl
        drop-shadow-2xl relative hover:contrast-125 ${isOpen ? `fixed w-8 h-8 z-50 hover:bg-black/30`
          : `w-11 h-11 hover:size-12`}`}
    >
      <motion.div
        transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
        className={`h-0.1 bg-rosa-claro rounded-3xl self-end ${isOpen ? "w-full" : "w-10/12"}`}
        animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? "0.365rem" : 0 }}
      />
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2, ease: easeInOut, type: keyframes }}
        className="w-full h-0.2 bg-rosa-claro rounded-3xl"
      />
      <motion.div
        transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
        className="w-full h-0.1 bg-rosa-claro rounded-3xl"
        animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? "-0.365rem" : 0 }}
      />
    </motion.div>
  );
};

export default MenuClose;

