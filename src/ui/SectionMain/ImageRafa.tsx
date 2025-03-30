"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import ImgRafa from "public/rafa.svg";

const ImageRafa = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="relative w-40% h-full flex justify-center max-1170:order-1 max-1170:h-full max-1170:w-full"
    >
      <Image
        priority
        width={532}
        unoptimized
        height={800}
        quality={100}
        src={ImgRafa}
        alt="Foto Rafaela Mazieiro"
        className="object-contain object-bottom z-20 relative max-1170:object-top max-1170:mt-2"
      />
    </motion.div>
  );
};

export default ImageRafa;



