"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const SectionHome = () => {

  useEffect(() => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="home" className="h-100vh bg-[url(/fundo.jpg)] items-center justify-items-center bg-cover bg-center">

      <div className="flex flex-row max-1170:flex-col h-full w-full">
        <div className="content-center max-1170:order-2">
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl z-50 ml-[10%]">
            Aqui, combinamos{" "}
            <span className="bg-[#8B3A3A] drop-shadow-[0_0_1px_#FF2079] bg-clip-text text-transparent">experiência médica</span> e tratamentos avançados para realçar o melhor de 
            <span className="bg-[#8B3A3A] drop-shadow-[0_0_1px_#FF2079] bg-clip-text text-transparent">{" "}você.</span>
          </motion.h1>
        </div> 
        <div className="flex max-1170:w-screen justify-center h-screen w-full">
          <motion.div
            initial={{ opacity: 0, x: 40, }}
            whileInView={{ opacity: 1, x: 0, }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-1170:order-1 content-center self-center h-fit w-fit">
            <div className="rounded-3xl rounded-tr-[200px] w-[80%] bg-black">
            <Image src="/resizeimg.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
              width={504} height={500} className="w-full h-full relative object-cover"/>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default SectionHome;