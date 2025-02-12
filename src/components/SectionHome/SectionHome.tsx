"use client"
import { motion } from "framer-motion";
import PlayFairDisplay from "next/font/local";
import Image from "next/image";
import { useEffect } from "react";

const FontPlayFair = PlayFairDisplay({
  src: "../../fonts/Playfair_Display/static/PlayfairDisplay-ExtraBoldItalic.ttf",
  variable: "--playfair-extrabold-italic",
  weight: "500"
});

const SectionHome = () => {

  useEffect(() => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="home" className={`${FontPlayFair.variable} font-playfair h-full w-full `}>

      <div className="flex flex-row max-1170:flex-col h-full bg-[url(/fundo.jpg)] bg-cover bg-center w-full px-[10%] items-center">
        <div className="content-center max-1170:order-2">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl z-50 leading-10 text-[#331E1E]">
            Aqui, combinamos{" "}
            <span className="bg-gradient-to-r contrast-125 from-[#8B3A3A] to-[#BF6B6B] bg-clip-text text-transparent drop-shadow-md">experiência médica</span>
            {" "}e tratamentos avançados para realçar <br />o melhor de{" "}
            <span className="bg-gradient-to-r contrast-125 from-[#8B3A3A] to-[#BF6B6B] bg-clip-text text-transparent drop-shadow-md">você</span>.
          </motion.h1>

          <motion.div className={`flex font-poppins flex-wrap gap-4 mt-4`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            {["Manoel Ribas", "Pitanga", "Ivaiporã", "São Paulo"].map((cidade, index) => (
              <button key={index} className={` bg-[#C96D6D] px-4 py-2 rounded-md text-white font-semibold transition-transform transform hover:scale-105 hover:bg-[#B85D5D]`}>
                Consultas {cidade}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-1170:order-1 max-w-[409px] max-h-[600px] relative w-full h-auto">
          <Image src="/foto1.png" alt="Foto Rafaela Mazieiro" unoptimized quality={100}
            width={409} height={600} className="w-full h-full object-cover" />
        </motion.div>
      </div>

    </section>
  );
};

export default SectionHome;
