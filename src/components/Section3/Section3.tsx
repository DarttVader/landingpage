"use client";
import { LeafletMap } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";
import { Contacts } from "@/exports";

const Section3 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
      className="w-screen h-screen flex flex-col p-5 py-10 md:p-10 md:py-16 md:flex-row min-w-[270px]"
    >
      <Contacts />
      <div className="h-full w-full content-center justify-items-start">
        <LeafletMap />
      </div>
    </motion.section>
  );
};

export default Section3;
