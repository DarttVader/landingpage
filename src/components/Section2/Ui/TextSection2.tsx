"use client";
import { easeInOut, keyframes, motion } from "framer-motion";

const TextSection2 = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0, rotate: 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="text-center text-white text-5xl font-bold self-center mb-5"
    >
      Tratamentos
    </motion.h1>
  );
};

export default TextSection2;
