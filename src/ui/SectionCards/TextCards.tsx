"use client"
import { easeInOut, keyframes, motion } from "framer-motion";

interface TextProps {
  Title?: string;
};

const TextCards: React.FC<TextProps> = ({ Title = "Tratamentos" }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0, rotate: 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="text-center text-white text-6xl tracking-wide font-bold italic self-center mb-5"
    >
      {Title}
    </motion.h1>
  );
};

export default TextCards;
