"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Link from "next/link";

const FooterFAQ = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="w-full h-10 p-1 text-red-wine text-center"
    >
      <small className="text-base">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          className="bg-gradient-to-r text-transparent brightness-125 contrast-125 bg-clip-text from-red-wine to-rose-500"
          href="https://www.instagram.com/fabio.ghizoni_/"
        >
          Fabio Ghizoni
        </Link>
        . Todos os direitos reservados.
      </small>
    </motion.footer>
  );
};

export default FooterFAQ;