"use client"
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

interface SectionTopProps {
  isOpen: boolean;
}

export default function SectionTop({ isOpen }: SectionTopProps) {
  return(
    <section className={`w-full bg-[#C49A6C] ${isOpen ? 
      /* ABERTO */ "pr-[31dvh] transition-all duration-300 ease-in-out" : 
      /* FECHADO */ "transition-all duration-300 ease-in-out"}`}>
      <div className="flex flex-row justify-end">
        <motion.h1 className="text-4xl px-[5%] content-center flex-1 w-10 text-white"
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}>
          Sua pele merece o maior cuidado. <br />Vamos trabalhar juntos?</motion.h1>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeInOut }}>
          <Image src="/rafa.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100} width={365} 
            height={552}/>
        </motion.div>
      </div>
    </section>
  );
};  