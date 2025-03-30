"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Image from "next/image";
import Img from "public/dermatologia-procedimento-estetico-rosto-1536x864.jpg";
import { useState } from "react";
import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";

type AnimatedProps = {
  title: string;
  description: string;
};

const AnimatedCards = ({ title, description }: AnimatedProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className="bg-fugente flex flex-col items-center justify-between text-white rounded-xl
        shadow-2xl drop-shadow-2xl">
      <div className="group pl-6 pt-6 pr-6">
        <Image src={Img} alt="Foto" className="w-full min-h-96 rounded-xl border-2 border-rosa-claro 
          group-hover:border-opacity-50 max-1170:min-h-60" />
      </div>
      <div className="h-full w-full pt-4 pb-4 justify-items-center">
        <h1 className="text-center text-4xl font-raleway font-bold mb-4">
          {title} <br />
        </h1>
        <h2 className="text-justify text-3xl hidden ml-6 mr-6">
          {description}
        </h2>
        <button
          onClick={toggleDescription}
          className="text-2xl font-bold bg-rosa-claro p-2 rounded-xl mt-4 border-2 border-white 
            hover:contrast-125 hover:scale-105">
          {isExpanded ? "Clique para ver menos" : "Clique para ver mais"}
          {isExpanded ? (
            <FaArrowTurnUp className="inline-block ml-1" />
          ) : (
            <FaArrowTurnDown className="inline-block ml-1" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCards;
