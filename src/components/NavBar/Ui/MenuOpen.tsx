import { easeInOut, keyframes, motion } from "framer-motion";
import Link from "next/link";

interface OpenMenuProps {
  isOpen: boolean;
}

const MenuOpen: React.FC<OpenMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut, type: keyframes }}
        className="bg-black/50 inset-0 fixed"
      />
      <motion.ul
        className={`${isOpen
            ? `text-black/80 text-2xl bg-bege-rose fixed w-1/3 h-screen rounded-bl-sm 
         top-0 right-0 text-center flex flex-col justify-center cursor-default`
            : `hidden`
          }`}
        initial={{ x: isOpen ? 600 : 0, opacity: isOpen ? 0 : 1 }}
        animate={{ x: isOpen ? 0 : 600, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1, ease: easeInOut, type: keyframes }}
      >
        <Link href="#" className="hover:bg-black/10 rounded-md py-2">
          Inicio
        </Link>
        <Link href="/About" className="hover:bg-black/10 rounded-md py-2">
          Sobre Mim
        </Link>
        <Link href="/Contacts" className="hover:bg-black/10 rounded-md py-2">
          Contatos
        </Link>
      </motion.ul>
    </div>
  );
};

export default MenuOpen;
