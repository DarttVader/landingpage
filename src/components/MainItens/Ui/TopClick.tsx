"use client";
import { SocialIcon } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const Transition = { duration: 0.8, ease: easeInOut, type: keyframes };

const TopClick = () => {
  return (
    <motion.div
      transition={Transition}
      className="w-14 h-14 self-end"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}>
      <SocialIcon
        PaddingIcon="1"
        Color="white"
        Size="2rem"
        FatherWidth="14"
        FatherHeight="14"
        Icon={FaArrowUp}
        Href="#NavBar" />
    </motion.div>
  );
};

export default TopClick;
