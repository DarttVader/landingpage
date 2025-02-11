import { Metadata } from "next";
import Inter from "next/font/local";
import Link from "next/link";

const FontInter = Inter({
  src: "../fonts/Inter/static/Inter_18pt-Regular.ttf",
  variable: "--inter-regular",
});

export const metadata: Metadata = {
  title: "404 | Rafaela Mazieiro",
  description: "Website not found, please return to home page",
  keywords: [
    "Rafaela Mazieiro",
    "Doutora", "Doctor",
    "Skin Beautification", "Pele bonita",
    "Your Life, Your Skin", "Sua Vida, Sua Pele",
    "Website", "Site", "Fabio Ghizoni", "Softwares",
    "Not Found", "Não encontrado", "404"
  ],
  openGraph: {
    title: "404 | Rafaela Mazieiro",
    description: "Site não encontrado, por favor volte para página inicial"
  },
};

const NotFound = () => {
  return (
    <div className={`${FontInter.variable}font-inter flex flex-col justify-center bg-[url(/fundo.jpg)] bg-cover bg-center items-center h-screen w-screen`}>
      <h1 className="text-3xl text-center bg-gradient-to-b from-[#8d1e1e]/90 to-[#c01e1e]/80 text-transparent bg-clip-text">Página não encontrada. Tente aqui para  
        <br />ir para página principal:</h1>
        <br /><button className="mt-1 rounded-md hover:from-[#8d1e1e]/70 hover:to-[#c01e1e]/70 bg-gradient-to-r from-[#8d1e1e]/90 to-[#c01e1e]/80 
          hover:bg-opacity-50 content-center transition-all duration-200">
        <Link href="/" className="text-2xl text-slate-200 hover:text-white/50 hover:drop-shadow-[0_0_4px_#c01e1e] 
          transition-all duration-200 text-center p-2 block h-full w-full rounded-lg">Página inicial</Link>
      </button>
    </div>                                                             
  );
};

export default NotFound;