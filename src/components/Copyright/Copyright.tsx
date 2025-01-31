"use client"
import { motion } from "framer-motion";

export default function CopyRight() {
  return (
    <div className="items-end flex flex-row">
      <motion.footer className="w-full p-2 bg-[#714D35] text-[#DC9192] text-center">
        <small className="text-sm">&copy; {new Date().getFullYear()} Fabio Ghizoni. Todos os direitos reservados.</small>
      </motion.footer>
    </div>
  );
};