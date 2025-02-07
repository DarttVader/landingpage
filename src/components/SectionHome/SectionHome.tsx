"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const SectionHome = () => {
  return (
    <section className="min-h-[calc(100vh-114px)] bg-gradient-to-r from-[#F4D3C4] to-[#E0C3A0]">

      <div className="flex flex-col md:flex-row justify-between h-full w-full">
        <div className="content-center max-md:order-2 justify-items-start">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl m-10 text-white">
            Cada <span className="">pele</span> conta uma história única. Aqui, combinamos{" "}
            <span>experiência médica</span> e tratamentos avançados para realçar o melhor de você.
            <button className="py-1 bg-[#8B3A3A] shadow-xl text-2xl px-[0.4rem] rounded-md hover:bg-opacity-90">Agende uma consulta</button>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-md:order-1 h-full w-full">
          <Image src="/rafa.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
            width={662} height={656} className="object-cover w-full h-full"/>
        </motion.div>
      </div>

    </section>
  );
};

export default SectionHome;