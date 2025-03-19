"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";

const CopyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Exibe o alerta após a cópia bem-sucedida
      window.alert("Número copiado!");
    })
    .catch((err) => {
      console.error("Erro ao copiar para a área de transferência:", err);
    });
};

const Contacts = () => {
  const contacts = [
    { number: "(43)99968-4679", location: "Pitanga - LM Clínica" },
    { number: "(43)99613-4770", location: "Manoel Ribas - Clínica Estética e Saúde" },
    { number: "(43)3472-3446", location: "Ivaiporã - Clínica São Lucas" },
  ];

  return (
    <motion.h1
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
      className="text-3xl bg-gradient-to-r text-transparent self-start mt-5 brightness-125 contrast-125 
        bg-clip-text from-vinho-normal to-vinho-escuro2"
    >
      Contatos:
      {contacts.map((contact, index) => (
        <p key={index} className="text-xl text-vinho-escuro2 flex items-center">
          {contact.number}
          <FaRegCopy
            onClick={() => CopyToClipboard(contact.number)} // Chama o alert após copiar
            className="text-vinho-escuro hover:opacity-50 hover:rotate-6 ml-2 cursor-pointer"
          />
          {contact.location}
        </p>
      ))}
    </motion.h1>
  );
};

export default Contacts;


