"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import ImgRafa from "public/rafa.png";

const ImageRafa = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="flex relative w-full h-screen min-h-screen justify-end items-end max-1170:order-1">
      <Image
        priority
        quality={50}
        src={ImgRafa}
        alt="Foto Blur Rafaela Mazieiro"
        className="absolute object-cover h-full object-bottom blur-2xl contrast-200 translate-x-7 scale-105
          min-h-full" />
      <Image
        priority
        unoptimized
        quality={100}
        src={ImgRafa}
        alt="Foto Rafaela Mazieiro"
        className="absolute object-contain h-full object-bottom min-h-full" />
    </motion.div>
  );
};

export default ImageRafa;
