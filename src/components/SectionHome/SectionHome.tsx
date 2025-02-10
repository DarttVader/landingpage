"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const SectionHome = () => {

  useEffect(() => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="home" className="min-h-[calc(100vh-114px)] bg-[url(/fundo.jpg)] items-center justify-items-center bg-cover bg-center">
      <div className="flex flex-row max-1170:flex-col h-full w-full">
        <div className="content-center max-1170:order-2">
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl z-50 relative max-1170:ml-0 max-1170:px-4 ml-[10%] text-[#3a2a1c]">
            Aqui, combinamos{" "}
            <span className="bg-[#8B3A3A] drop-shadow-[0_0_0.5px_#FF2079] bg-clip-text text-transparent">experiência médica</span> e tratamentos avançados para realçar o melhor de 
            <span className="bg-[#8B3A3A] drop-shadow-[0_0_0.5px_#FF2079] bg-clip-text text-transparent">{" "}você.</span>
          </motion.h1>
        </div>
        <div className="flex justify-center h-[656px] w-[662px] py-16">
        <motion.div
          initial={{ opacity: 0, x: 40, }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-1170:order-1 bg-[#FCEAD7] h-fit w-full rounded-l-md">
          <Image src="/fotorafa.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
            width={333} height={500} className="border-2 border-pink-950"/>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;