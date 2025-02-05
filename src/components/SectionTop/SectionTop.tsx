"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionTopProps {
  isOpen: boolean;
}

const SectionTop = ({ isOpen }: SectionTopProps) => {
  return (
    <section className="w-full h-full bg-[#C49A6C]">

      <div className="flex flex-col md:flex-row justify-between">
        <div className="content-center max-md:order-2 w-auto justify-items-start">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl w-auto m-8 flex-1 text-white">
            Sua pele é reflexo da sua saúde e bem-estar. <br />Vamos conversar?<br />
            <button className="bg-[#824A2D] hover:bg-[#824A2D]/70 text-2xl shadow-2xl rounded-full p-[6px]">Converse comigo</button>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-auto max-md:order-1">
          <Image src="/rafa.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
            width={662} height={656} />
        </motion.div>
      </div>

    </section>
  );
};

export default SectionTop;