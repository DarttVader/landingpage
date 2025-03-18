"use client";
import { motion, easeInOut, keyframes } from "framer-motion";

const GridCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="grid grid-rows-1 md:grid-cols-2 gap-5 w-full"
    >
      {children}
    </motion.div>
  );
};

export default GridCards;
