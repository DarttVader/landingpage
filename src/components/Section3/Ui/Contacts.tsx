"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const InstagramIcon = () => {
  return (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 23 23">
      <defs>
        <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEDA75" /> {/* Amarelo */}
          <stop offset="25%" stopColor="#FA7E1E" /> {/* Laranja */}
          <stop offset="50%" stopColor="#D62976" /> {/* Rosa */}
          <stop offset="75%" stopColor="#962FBF" /> {/* Roxo */}
          <stop offset="100%" stopColor="#4F5BD5" /> {/* Azul */}
        </linearGradient>
      </defs>
      <FaInstagram size="1.5rem" fill="url(#instaGradient)" />
    </svg>
  );
};

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}
      className="h-full w-full grid grid-rows-3"
    >
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: easeInOut, type: keyframes }}
        className="text-3xl bg-gradient-to-r text-transparent self-start brightness-125 contrast-125 bg-clip-text from-red-wine to-red-wine-950"
      >
        Endereço:
        <p className="text-2xl text-black">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
        className="text-3xl bg-gradient-to-r text-transparent self-center brightness-125 contrast-125 bg-clip-text from-red-wine to-red-wine-950"
      >
        Contatos:
        <p className="text-2xl text-black">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeInOut, type: keyframes }}
        className="text-3xl bg-gradient-to-r text-transparent self-end brightness-125 contrast-125 bg-clip-text from-red-wine to-red-wine-950"
      >
        Redes Sociais:
        <div className="flex gap-3">
          <FaWhatsapp color="#15803d" size="1.5rem" />
          <FaFacebook color="#1d4ed8" size="1.5rem" />
          <InstagramIcon />
          <FaXTwitter color="black" size="1.5rem" />
        </div>
      </motion.h1>
    </motion.div>
  );
};

export default Contacts;
