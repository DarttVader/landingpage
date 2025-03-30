"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";

const TextMain = () => {
  return (
    <div className="flex flex-col w-60% z-6 bottom-0 max-1170:w-full max-1170:absolute max-1170:order-2
      max-1170:p-4">
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="text-7xl font-display tracking-tight w-full text-vinho-escuro max-1170:text-5xl 
          max-1170:text-center">
        Realçando oque há de melhor em você
        <span className="inline-flex ml-4 relative top-2">
          <FaRegHeart className="text-rosa-claro hover:scale-105 hover:contrast-125" />
        </span>
      </motion.h1>

      <motion.h2
        className="text-5xl text-vinho-escuro font-light italic max-1170:text-4xl 
          max-1170:text-center">
        A expêriencia e carinho que sua pele merece!
      </motion.h2>

      <motion.h3
        className="text-4xl text-vinho-escuro font-light italic max-1170:text-3xl max-1170:text-center">
        Conheça nossos tratamentos ou agende uma consulta.
      </motion.h3>
    </div>
  );
};

export default TextMain;
