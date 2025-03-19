"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const Transition = { duration: 0.8, ease: easeInOut, type: keyframes };

const TopClick = () => {
  return (
    <motion.div
      transition={Transition}
      className="min-w-12 min-h-12 md:min-w-14 md:min-h-14 rounded-full"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}>
      <a href="#navbar" className="group rounded-full">
        {/* Container */}
        <div className={`relative flex items-center justify-center rounded-full w-14 h-14`}>
          {/* Borda animada */}
          <div className={`absolute h-full w-full rounded-full bg-custom-conic animate-spin-slow blur-min`} />
          {/* Ícone central */}
          <div className={`absolute p-2 rounded-full bg-custom-radial`}>
            <FaArrowUp color="white" size="2rem" className="group-hover:brightness-125" />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default TopClick;
