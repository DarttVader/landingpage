import { handleScroll, spanHandleClick } from "@/exports";
import { FaRegHeart } from "react-icons/fa";

interface TextMainProps {
  setIsUlOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextMain: React.FC<TextMainProps> = ({ setIsUlOpen, setIsMenuOpen }) => {
  const handleConsultationClick = () => {
    spanHandleClick();
    setIsMenuOpen(true);
    setIsUlOpen(true);
  }
  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center md:order-1 order-2
        -mt-60 bg-white/20 sm:bg-transparent p-2 rounded-xl sm:rounded-none sm:p-0 sm:-mt-0">
      <h1
        className="lg:text-7xl lg:text-start font-display tracking-tight w-full text-vinho-escuro 
          text-6xl text-center rounded-2xl">
        <span className="text-rosa-claro cursor-default hover:contrast-125">
          Realçando
        </span> o que há de melhor em{" "}
        <span className="text-rosa-claro cursor-default group hover:contrast-125">
          você
          <span className="inline-flex ml-4 relative top-2">
            <FaRegHeart className="text-rosa-claro group-hover:scale-105 group-hover:contrast-125" />
          </span>
        </span>
      </h1>

      <h2
        className="text-4xl text-vinho-escuro italic text-center sm:text-start mx-2
          mt-2">
        A experiência e carinho que sua pele merece! Conheça nossos{" "}
        <span
          onClick={(e) => handleScroll("section-cards", e)}
          className="underline underline-offset-2 text-rosa-claro cursor-pointer hover:contrast-125
            hover:no-underline">
          tratamentos
        </span>{" "}ou agende uma{" "}
        <span
          onClick={handleConsultationClick}
          className="underline underline-offset-2 text-rosa-claro cursor-pointer hover:contrast-125
            hover:no-underline">

          consulta
        </span>.
      </h2>
    </div>
  );
};

export default TextMain;
