"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";

const TextSectionMain = () => {
  return (
    <div
      className="flex flex-col w-65% max-1170:w-full max-1170:absolute max-1170:order-2 
        max-1170:text-center max-1170:bottom-0 max-1170:bg-white/40">

      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="text-6xl font-display w-full text-transparent bg-clip-text bg-gradient-to-r 
          from-vinho-escuro2 via-vinho-normal to-vermelho-normal">
        Realçando oque há de melhor em você
        <span className="inline-flex ml-4 relative top-2">
          <FaRegHeart color="#B56576" className="hover:scale-105 hover:contrast-125" />
        </span>
      </motion.h1>

      <motion.h2
        className="lg:text-3xl lg:text-start text-center">
        A expêriencia e carinho que sua pele merece!
      </motion.h2>

      <motion.h3
        className="lg:text-xl lg:text-start text-center">
        Conheça nossos tratamentos ou agende uma consulta.
      </motion.h3>
    </div>
  );
};

export default TextSectionMain;
