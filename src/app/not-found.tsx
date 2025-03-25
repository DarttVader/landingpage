import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Rafaela Mazieiro",
  description: `Page not found(404), Please Return to Home Page,
    Página não encontrada(404), Por favor Retorne a Página Principal!`,
  keywords: [
    "Not Found",
    "Não encontrado",
    "Página não encontrada",
    "404",
    "Erro 404",
    "Volte a Página principal",
    "Return Home",
    "Error",
    "Return from initial"
  ],
};

const Custom404 = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center 
      min-h-full min-w-full w-screen h-screen bg-cover bg-center bg-fundo px-1 flex-grow">
      <h1 className="relative text-7xl text-center bg-gradient-to-r from-vermelho-escuro 
        drop-shadow-2xl to-vermelho-normal text-transparent bg-clip-text">
        404
      </h1>
      <h2 className="text-3xl text-center text-vermelho-escuro">
        PÁGINA NÃO ENCONTRADA. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-vinho-escuro2 via-vinho-normal 
          to-vermelho-normal">Tente{" "}
        </span>
        <Link href="/" className="text-center h-full w-full rounded-lg bg-gradient-to-r from-vermelho-escuro 
          drop-shadow-2xl to-vermelho-normal text-transparent bg-clip-text contrast-200 hover:opacity-60">
          aqui
        </Link>
      </h2>
    </div>
  );
};

export default Custom404;