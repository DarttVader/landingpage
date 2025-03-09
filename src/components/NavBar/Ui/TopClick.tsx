"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const TopClick = () => {
  const [clicked, SetClicked] = useState(false);
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    SetClicked(true);
  };
  return (
    <motion.div
      onClick={ScrollTop}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="fixed rounded-full p-2 bg-red-wine contrast-150 bottom-0 mb-5 ml-5 content-center
       justify-items-center cursor-pointer group">
      <FaArrowUp className={`${clicked ? `` : ``} h-4 w-4 text-fugente group-hover:brightness-105 brightness-150`} />
    </motion.div>
  );
};

export default TopClick;