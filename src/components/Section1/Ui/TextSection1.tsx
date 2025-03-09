"use client";
import { easeInOut, keyframes, motion } from "framer-motion";

const TextSection1 = () => {
  return (
    <div
      className="flex flex-col justify-end max-1170:mb-32 lg:justify-center max-1170:absolute max-1170:order-2 
          h-full w-65% max-1170:w-full"
    >
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="text-4xl lg:text-5xl text-center lg:text-start z-1 text-red-wine w-full"
      >
        Aqui, combinamos experiência médica e tratamentos avançados para realçar
        o melhor de você.
      </motion.h1>
    </div>
  );
};

export default TextSection1;
