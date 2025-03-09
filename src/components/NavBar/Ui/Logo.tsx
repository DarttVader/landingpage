"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LogoSvg from "public/logo.svg";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="w-20 relative"
    >
      <Link href="#" className="w-20 h-20">
        <Image
          src={LogoSvg}
          alt="Logo de Rafaela Mazieiro"
          fill
          priority
          quality={100}
          unoptimized
          className="hover:brightness-125 object-contain"
        />
      </Link>
    </motion.div>
  );
};

export default Logo;
