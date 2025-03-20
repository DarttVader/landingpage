"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import ImgRafa from "public/rafa.png";

const ImageRafa = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="flex relative justify-end items-end w-full h-full max-1170:w-maximg max-1170:order-1
        max-1170:items-start">
      <Image
        priority
        quality={50}
        src={ImgRafa}
        alt="Foto Blur Rafaela Mazieiro"
        className="z-4 absolute object-contain object-bottom blur-2xl contrast-200 w-auto h-auto scale-125" />
      <Image
        priority
        unoptimized
        quality={100}
        src={ImgRafa}
        alt="Foto Rafaela Mazieiro"
        className="z-5 absolute object-contain object-bottom w-auto h-auto" />
    </motion.div>
  );
};

export default ImageRafa;
