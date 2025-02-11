import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-t from-bege-500 to-marrom-400 items-center min-h-screen">
      <h1 className="text-3xl text-black/70 flex text-nowrap flex-col">Página não encontrada... tente aqui:
        <Link href="/" className="text-2xl text-[#714D35] underline mx-48 text-nowrap hover:scale-105 text-center">Página inicial</Link></h1>
    </div>
  );
};

export default NotFound;