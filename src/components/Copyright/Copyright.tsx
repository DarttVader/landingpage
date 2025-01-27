"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CopyRight = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const windowHeight = window.innerHeight; /*Altura da janela visível*/
      const contentHeight = document.documentElement.scrollHeight; /*Altura total do conteúdo*/

      /*Exibe o rodapé se o conteúdo for menor ou igual à altura da janela*/
      if (contentHeight <= windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    /*Verifica imediatamente ao carregar e adiciona o listener para mudanças futuras*/
    handleVisibility();
    window.addEventListener("resize", handleVisibility); /*Atualiza caso a janela seja redimensionada*/
    return () => {
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  return (
    <motion.div
      className={`fixed bottom-0 left-0 w-full bg-[#E1D0C2] font-bold
          text-center py-3`}
      initial={{ opacity: 0, y: 50 }} /*Início invisível e fora da tela*/
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} /*Animação para aparecer/desaparecer*/
      transition={{ duration: 0.5, ease: "easeInOut" }} /*Suavidade na transição*/
    >
      © {new Date().getFullYear()} Todos os direitos reservados.
    </motion.div>
  );
};

export default CopyRight;
