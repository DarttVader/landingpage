"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import Img from "public/dermatologia-procedimento-estetico-rosto-1536x864.jpg";

const AnimatedCards = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 flex flex-col items-center justify-between text-white text-lg 
          font-semibold transition-all duration-300 ease-in-out overflow-hidden rounded-xl"
      >
        <div className="p-6">
          <Image src={Img} alt="Foto" className="rounded-xl" />
        </div>
        <div className="h-full w-full px-6">
          <h1 className="text-center text-2xl font-bold">
            TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
          </h1>
          <h2 className="text-center hidden">
            Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
          </h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-between text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden rounded-xl"
      >
        <div className="p-6">
          <Image src={Img} alt="Foto" className="rounded-xl" />
        </div>
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center hidden">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-between text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden rounded-xl"
      >
        <div className="p-6">
          <Image src={Img} alt="Foto" className="rounded-xl" />
        </div>
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center hidden">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-between text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden rounded-xl"
      >
        <div className="p-6">
          <Image src={Img} alt="Foto" className="rounded-xl" />
        </div>
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center hidden">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
    </>
  );
};

export default AnimatedCards;
