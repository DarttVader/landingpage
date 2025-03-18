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
      className="max-1170:order-1 flex w-[43.75rem] lg:w-[26.938rem] h-full justify-center relative">
      <div className="z-4 h-full w-full absolute">
        <Image
          priority
          quality={50}
          src={ImgRafa}
          alt="Foto Rafaela Mazieiro"
          className="object-contain object-bottom blur-2xl contrast-200 w-auto h-auto" />
      </div>
      <div className="z-5 w-full h-full">
        <Image
          priority
          unoptimized
          quality={100}
          src={ImgRafa}
          alt="Foto Rafaela Mazieiro"
          className="object-contain object-bottom w-auto h-auto" />
      </div>
    </motion.div>
  );
};

export default ImageRafa;
