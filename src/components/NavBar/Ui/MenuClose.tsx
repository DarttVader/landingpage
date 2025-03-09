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
      className={`flex flex-col group mr-1 self-center py-2 px-1 cursor-pointer transition-all duration-300 
        ease-in-out justify-between rounded-md items-center ${isOpen ? `fixed right-0 z-3 w-6 h-6` : `relative w-8 h-8`}`}>

      <motion.div
        className={`${isOpen ? "bg-bege-rose w-11/12" : "bg-fugente w-full"} h-0.1 transform rounded-xl group-hover:brightness-150`}
        transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
        animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? 3.5 : 0, }} />

      <motion.div
        className={`${isOpen ? "group-hover:hidden bg-bege-rose" : "bg-fugente w-full"} h-0.1 rounded-xl group-hover:brightness-150`}
        animate={{ opacity: isOpen ? 0 : 1, }} />

      <motion.div
        className={`${isOpen ? "bg-bege-rose w-11/12" : "bg-fugente w-full"} h-0.1 transform rounded-xl group-hover:brightness-150`}
        transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
        animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? -3.5 : 0, }} />
    </motion.div>
  );
};

export default MenuClose;
