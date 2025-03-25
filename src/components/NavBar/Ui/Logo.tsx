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
      className="w-44 h-auto relative group ml-1">
      <Link href="/" about="Logo Rafaela Mazieiro" className="absolute w-11/12 h-11/12 self-center inset-0 
        group-hover:contrast-125">
        <Image
          fill
          priority
          unoptimized
          quality={100}
          src={LogoSvg}
          alt="Logo de Rafaela Mazieiro"
          className="object-contain object-left group-hover:scale-105"
        />
      </Link>
    </motion.div>
  );
};

export default Logo;

