"use client";
import { scrollToTop } from "@/exports";
import { FaArrowUp } from "react-icons/fa6";

const TopClick = () => {
  return (
    <div
      className="group rounded-full">
      <button
        title="Voltar ao topo"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        about="Scroll para topo da página"
        className="flex w-14 h-14 relative items-center justify-center bg-rosa-claro border-2 border-white
          p-2 rounded-full group-hover:scale-105 group-hover:contrast-125 shadow-2xl drop-shadow-2xl">
        <FaArrowUp color="white" size="2rem" />
      </button>
    </div>
  );
};

export default TopClick;
