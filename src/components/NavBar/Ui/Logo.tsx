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
      className="w-44 h-18 relative self-center -ml-1 hover:contrast-75"
    >
      <Link href="/" className="absolute inset-0">
        <Image
          fill
          priority
          unoptimized
          quality={100}
          src={LogoSvg}
          alt="Logo de Rafaela Mazieiro"
          className="hover:brightness-125 object-contain"
        />
      </Link>
    </motion.div>
  );
};

export default Logo;

