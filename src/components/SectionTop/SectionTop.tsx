"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionTopProps {
  isOpen: boolean;
}

const SectionTop = ({ isOpen }: SectionTopProps) => {
  return(
    <section className={`w-full h-full pb-[3.3rem] pt-[3.3rem] bg-[#C49A6C] ${isOpen ? 
      /* ABERTO */ "" : 
      /* FECHADO */ null}`}>

      <div className="flex flex-col lg:flex-row xl:flex-row justify-between">

        <div className="content-center w-auto lg:justify-items-start xl:justify-items-start">
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl xl:text-4xl w-auto m-8 border flex-1 lg:text-nowrap xl:text-nowrap text-white">
              Sua pele é reflexo da sua saúde e bem-estar. <br />Vamos conversar?<br />
            <button className="bg-[#824A2D] hover:bg-[#824A2D]/70 text-xl xl:text-2xl shadow-2xl rounded-full p-[6px]">Converse comigo</button>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-auto mr-36 mb-10 border-2">
          <Image src="/rafa.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100} 
            width={662} height={1000}/>
        </motion.div>
      </div>

    </section>
  );
};  

export default SectionTop;