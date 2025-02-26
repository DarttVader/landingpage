"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="ml-1 w-40 relative"
    >
      <Link href="#" className="w-40 h-20 fixed">
        <Image
          src="/logo.svg"
          alt="Logo de Rafaela Mazieiro"
          fill
          priority
          quality={100}
          unoptimized
          className="hover:opacity-80 object-contain"
        />
      </Link>
    </motion.div>
  );
};

export default Logo;
