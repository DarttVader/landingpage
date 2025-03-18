import { easeInOut, keyframes, motion } from "framer-motion";
import Link from "next/link";

interface OpenMenuProps {
  isOpen: boolean;
}

const MenuOpen: React.FC<OpenMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/40 inset-0 fixed z-1"
        transition={{ duration: 1, ease: easeInOut, type: keyframes }} />
      <motion.ul
        className={`${isOpen
          ? `text-bege-rose text-2xl bg-cinza-claro fixed pt-18 h-screen rounded-l-xl 
          top-0 right-0 text-center flex flex-col justify-start w-56 z-2`
          : `hidden`
          }`}
        initial={{ x: isOpen ? 600 : 0, opacity: isOpen ? 0 : 1 }}
        animate={{ x: isOpen ? 0 : 600, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1, ease: easeInOut, type: keyframes, }}
      >
        <Link href="#" className="hover:brightness-150 py-2">
          Inicio
        </Link>
        <Link href="/About" className="hover:brightness-150 py-2">
          Sobre Mim
        </Link>
        <Link href="/Contacts" className="hover:brightness-150 py-2">
          Contatos
        </Link>
      </motion.ul>
    </>
  );
};

export default MenuOpen;
