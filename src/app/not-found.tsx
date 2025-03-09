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
    <div className="relative overflow-hidden flex flex-col justify-center items-center 
      min-h-full min-w-full w-screen h-screen bg-cover bg-center bg-fundo px-1 flex-grow">
      <h1 className="relative text-7xl text-center bg-gradient-to-r from-red-1 
        drop-shadow-2xl to-red-2 text-transparent bg-clip-text">
        404
      </h1>
      <h2 className="text-3xl text-center text-red-escuro">
        PÁGINA NÃO ENCONTRADA. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-wine-950 via-red-wine 
          to-red-400">Tente{" "}
        </span>
        <Link href="/" className="text-center h-full w-full rounded-lg bg-gradient-to-r from-red-1 
          drop-shadow-2xl to-red-2 text-transparent bg-clip-text contrast-200 hover:opacity-60">
          aqui
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
