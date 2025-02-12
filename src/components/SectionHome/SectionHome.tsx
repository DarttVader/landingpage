"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const SectionHome = () => {

  useEffect(() => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="home" className="font-playfair bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(/fundo.jpg)] bg-cover bg-center h-screen w-full">

      <div className="flex flex-row max-1170:flex-col max-540:px-0 px-[5%] items-center">
        <div className="content-center max-1170:order-2 w-[60%]">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl z-50 leading-10 text-[#443535]">
            Aqui, combinamos{" "}
            <span className="bg-gradient-to-r contrast-150 from-[#8B3A3A] to-[#BF6B6B] bg-clip-text text-transparent drop-shadow-md">experiência médica</span>
            {" "}e tratamentos avançados para realçar <br className="xl:hidden"/>o melhor de{" "}
            <span className="bg-gradient-to-r contrast-150 from-[#8B3A3A] to-[#BF6B6B] bg-clip-text text-transparent drop-shadow-md">você</span>.
          </motion.h1>

          <motion.div className={`flex font-poppins flex-wrap gap-4 mt-4`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
              <button className={` bg-[#C96D6D] px-4 py-2 rounded-md text-white font-semibold transition-transform transform hover:scale-105 hover:bg-[#B85D5D]`}>
                Consultas Manoel Ribas</button>
              <button className={` bg-[#C96D6D] px-4 py-2 rounded-md text-white font-semibold transition-transform transform hover:scale-105 hover:bg-[#B85D5D]`}>
                Consultas Pitanga</button>
              <button className={` bg-[#C96D6D] px-4 py-2 rounded-md text-white font-semibold transition-transform transform hover:scale-105 hover:bg-[#B85D5D]`}>
                Consultas Ivaiporã</button>
              <button className={` bg-[#C96D6D] px-4 py-2 rounded-md text-white font-semibold transition-transform transform hover:scale-105 hover:bg-[#B85D5D]`}>
                Consultas São Paulo</button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-1170:order-1 h-[600px] w-[409px]">
          <Image src="/foto1.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
            width={409} height={600} className="object-cover h-full" priority/>
        </motion.div>
      </div>

    </section>
  );
};
 
export default SectionHome;
