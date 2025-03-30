"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const Transition = { duration: 0.5, ease: easeInOut, type: keyframes };

const TopClick = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      transition={Transition}
      className="group rounded-full"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}>
      <button
        title="Voltar ao topo"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        about="Scroll para topo da página"
        className="flex w-14 h-14 relative items-center justify-center bg-rosa-claro border-2 border-white
          p-2 rounded-full group-hover:scale-105 group-hover:contrast-125 shadow-2xl drop-shadow-2xl">
        <FaArrowUp color="white" size="2rem" />
      </button>
    </motion.div>
  );
};

export default TopClick;
