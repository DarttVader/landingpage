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
      className="flex flex-col min-w-14 min-h-56 fixed z-1 bottom-0 bg-black left-0 mb-4 ml-4 justify-between">
      <SocialMedia />
      <TopClick />
    </motion.div>
  );
};

export default MainItens;