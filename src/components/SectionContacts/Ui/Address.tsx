"use client"
import { easeInOut, keyframes, motion } from "framer-motion";

const Address = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: easeInOut, type: keyframes }}
      className="text-3xl bg-gradient-to-r text-transparent self-start brightness-125 contrast-125 
          bg-clip-text from-vinho-normal to-vinho-escuro2">
      Endereço:
      <p className="text-xl text-vinho-escuro2">
        Pitanga PR - Rua Dez de Abril, 251, Centro - 85200-000
      </p>
      <p className="text-xl text-vinho-escuro2">
        Manoel Ribas PR - Rua Dom Pedro I, 189, Centro - 85260-000
      </p>
      <p className="text-xl text-vinho-escuro2">
        Ivaiporã PR - Avenida Souza Naves, 1760, Centro - 86870-000
      </p>
      <p className="text-xl text-vinho-escuro2">
        São Paulo SP -
      </p>
    </motion.h1>
  );
};

export default Address;