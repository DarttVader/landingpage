"use client";
import { easeInOut, keyframes, motion } from "framer-motion";

const AnimatedCards = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex items-center justify-center text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out"
      >
        Tratamento 1
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex items-center justify-center text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out"
      >
        Tratamento 2
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex items-center justify-center text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out"
      >
        Tratamento 3
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex items-center justify-center text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out"
      >
        Tratamento 4
      </motion.div>
    </>
  );
};

export default AnimatedCards;
