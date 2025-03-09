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
      className="max-1170:order-1 flex w-[43.75rem] lg:w-[26.938rem] h-full justify-center relative contain-content"
    >
      <Image
        priority
        unoptimized
        quality={100}
        src={ImgRafa}
        alt="Foto Rafaela Mazieiro"
        className="object-contain object-bottom z-20"
      />
    </motion.div>
  );
};

export default ImageRafa;
