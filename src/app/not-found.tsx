import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl flex text-nowrap flex-col">Página não encontrada... tente aqui:
        <Link href="/" className="text-2xl text-slate-400 underline mx-48 text-nowrap hover:text-white text-center">Página inicial</Link></h1>
    </div>
  )
}