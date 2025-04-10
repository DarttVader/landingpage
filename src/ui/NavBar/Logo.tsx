import Image from "next/image";
import Link from "next/link";
import LogoSvg from "public/logo.svg";

const Logo = () => {
  return (
    <div
      className="w-44 h-auto relative group ml-1">
      <Link
        href="/"
        about="Logo Rafaela Mazieiro"
        title="Logo Rafaela Mazieiro"
        className="absolute w-11/12 h-11/12 self-center inset-0 group-hover:contrast-125">
        <Image
          fill
          priority
          unoptimized
          quality={100}
          src={LogoSvg}
          alt="Logo de Rafaela Mazieiro"
          className="object-contain object-left group-hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default Logo;

