"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";

const TextSectionMain = () => {
  return (
    <div
      className="flex flex-col w-65% justify-center max-1170:w-full max-1170:justify-end max-1170:mb-32 
        max-1170:absolute max-1170:order-2 max-1170:text-center">
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="text-4xl lg:text-5xl text-center lg:text-start z-6 text-black w-full"
      >
        Realçando oque há de melhor em você
        <FaRegHeart color="#B56576" className="hover:scale-105 hover:contrast-125" />
      </motion.h1>
      <motion.h2
        className="lg:text-3xl lg:text-start text-center z-6">
        A expêriencia e carinho que sua pele merece!
      </motion.h2>
      <motion.h3
        className="lg:text-xl lg:text-start text-center z-6">
        Conheça nossos tratamentos ou agende uma consulta.
      </motion.h3>
    </div>
  );
};

export default TextSectionMain;
