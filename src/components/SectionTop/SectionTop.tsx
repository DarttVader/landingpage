"use client"
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

interface SectionTopProps {
  isOpen: boolean;
}

export default function SectionTop({ isOpen }: SectionTopProps) {
  return(
    <section className={`w-full transition-all duration-300 ease-in-out bg-[#C49A6C] ${isOpen ? 
      /* ABERTO */ "pr-[31dvh]" : 
      /* FECHADO */ null}`}>
      <div className="flex flex-row justify-between">
        <div className="content-center w-full justify-items-start">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="text-3xl w-full border content-center text-nowrap flex-1 text-white">
              Sua pele é reflexo da sua saúde e bem-estar. <br />Vamos conversar?
            <button className="bg-[#824A2D] text-nowrap hover:bg-[#824A2D]/70 text-2xl rounded-full p-2">Converse comigo</button>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-1/2 border">
          <Image 
            src="/rafa.png" 
            alt="Foto Rafaela Mazieiro" 
            unoptimized 
            quality={100} 
            className="border-2 border-black"
            layout="responsive"
            objectFit="cover"
            width={365}
            height={552}/>
        </motion.div>
      </div>
    </section>
  );
};  