import Link from "next/link";

export default function NotFound() {
  return(
    <div className="flex flex-col justify-center items-center min-h-screen">
    <h1 className="font-roboto text-3xl flex flex-col">Página não encontrada... tente aqui:
    <Link href="/" className="text-2xl text-center">Página inicial</Link></h1>
    </div>
  )
}