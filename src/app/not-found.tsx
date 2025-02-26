import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Rafaela Mazieiro",
  description: "Website not found, please return to home page",
  keywords: [
    "Rafaela Mazieiro",
    "Doutora",
    "Doctor",
    "Skin Beautification",
    "Pele bonita",
    "Your Life, Your Skin",
    "Sua Vida, Sua Pele",
    "Website",
    "Site",
    "Fabio Ghizoni",
    "Softwares",
    "Not Found",
    "Não encontrado",
    "404",
  ],
  openGraph: {
    title: "404 | Rafaela Mazieiro",
    description: "Site não encontrado, por favor volte para página inicial",
  },
};

const NotFound = () => {
  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center 
  min-h-full min-w-full w-screen h-screen bg-cover bg-center bg-fundo px-1 flex-grow"
    >
      {/* Conteúdo acima do background */}
      <h1
        className="relative text-3xl font-playfair text-center max-540:text-xl 
    bg-gradient-to-b from-red-1/90 drop-shadow-2xl to-red-2/80 text-transparent bg-clip-text"
      >
        Página não encontrada. Tente aqui para
        <br />
        ir para página principal:
      </h1>

      <button
        className="relative mt-4 rounded-md bg-gradient-to-r from-red-1/90 to-red-2/80 
    hover:from-red-1/70 hover:to-red-2/70 shadow-2xl transition-all duration-200"
      >
        <Link
          href="/"
          className="text-2xl font-lora text-slate-200 max-540:text-lg hover:text-white/50 
      hover:drop-shadow-shadowcustom transition-all duration-200 
      text-center p-2 block h-full w-full rounded-lg"
        >
          Página inicial
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
