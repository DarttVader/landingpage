"use client"
import { motion } from "framer-motion";

export default function CopyRight() {
  return (
    <div className="min-h-screen items-end flex flex-row">
      <motion.footer className="w-full p-1 text-center border-2 border-white/50">
        <small>&copy; {new Date().getFullYear()} Seu Nome ou Nome da Empresa. Todos os direitos reservados.</small>
      </motion.footer>
    </div>
  );
};