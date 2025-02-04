"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function CopyRight() {
  return (
    <div className="items-end flex flex-row">
      <motion.footer className="w-full p-2 bg-[#d3b799] text-[#714d35] text-center">
        <small className="text-sm">&copy; {new Date().getFullYear()} <Link className="underline" href="https://www.instagram.com/fabio.ghizoni_/">Fabio Ghizoni</Link>. 
          Todos os direitos reservados.</small>
      </motion.footer>
    </div>
  );
};