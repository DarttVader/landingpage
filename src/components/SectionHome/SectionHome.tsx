"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const SectionHome = () => {
  return (
    <section className="min-h-[calc(100vh-114px)] bg-gradient-to-r from-[#D2A670] via-[#EDAF92] to-[#DAB68B]">

      <div className="flex flex-row max-1170:flex-col justify-between h-full w-full">
        <div className="content-center max-1170:order-2 justify-items-start">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl z-50 relative max-1170:ml-0 max-1170:px-4 ml-[10%] text-stone-800">
            Aqui, combinamos{" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#8B3A3A] to-[#B85656]">experiência médica</span> e tratamentos avançados para realçar o melhor de 
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#8B3A3A] to-[#B85656]">{" "}você.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-1170:order-1 max-1170:p-5 h-full w-full">
          <Image src="/rafa.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
            width={662} height={656} className="h-full w-full"/>
        </motion.div>
      </div>

    </section>
  );
};

export default SectionHome;