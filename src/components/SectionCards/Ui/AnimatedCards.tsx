"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import { CiImageOn } from "react-icons/ci";

const AnimatedCards = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-between text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden"
      >
        <CiImageOn size="20rem" />
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-center text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden"
      >
        <CiImageOn size="20rem" />
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-between text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden"
      >
        <CiImageOn size="20rem" />
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
        className="bg-slate-700 h-96 flex flex-col items-center justify-between text-white text-lg font-semibold
          hover:h-[35rem] transition-all duration-300 ease-in-out overflow-hidden"
      >
        <CiImageOn size="20rem" />
        <h1 className="text-center font-bold">
          TRATAMENTO DE ALOPECIA ANDROGENÉTICA <br />
        </h1>
        <h2 className="text-center">
          Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície?
        </h2>
      </motion.div>
    </>
  );
};

export default AnimatedCards;
