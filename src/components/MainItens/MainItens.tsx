"use client"
import { SocialMedia, TopClick } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";

const Transition = { duration: 0.5, ease: easeInOut, type: keyframes };

const MainItens = () => {

  const ScrollTop = () => {
    if (typeof window !== "undefined" && window.scrollY === 0) {
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      onClick={ScrollTop}
      transition={Transition}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex space-x-4 fixed z-1 bottom-0 left-0 mb-4 ml-4 w-64 h-18">
      <TopClick />
      <SocialMedia />
    </motion.div>
  );
};

export default MainItens;