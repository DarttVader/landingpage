"use client"
import { motion } from "framer-motion";
import Lora from "next/font/local";

const FontLora = Lora({
  src: "fonts/Lora/static/Lora-Regular.ttf"
});

export default function SideBar() {
  return (
    <div>
      <motion.nav className="w-full p-1 border-2 border-white">
        <h1>Rafaela Mazieiro</h1>
      </motion.nav>
    </div>
  );
};