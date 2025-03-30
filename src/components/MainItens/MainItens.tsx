"use client"
import { SocialMedia, TopClick } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";

const Transition = { duration: 0.5, ease: easeInOut, type: keyframes };

const MainItens = () => {
  return (
    <motion.div
      transition={Transition}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col min-w-14 min-h-56 fixed bottom-0 right-0 mb-4 mr-4 justify-between z-10
        max-1170:mb-2 max-1170:mr-2">
      <SocialMedia />
      <TopClick />
    </motion.div>
  );
};

export default MainItens;