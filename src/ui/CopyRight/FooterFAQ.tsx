"use client"
import Link from "next/link";

const FooterFAQ = () => {
  return (
    <footer
      className="w-full h-auto p-1 text-vinho-escuro2 text-center"
    >
      <small className="text-lg">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          target="_blank"
          title="Instagram Fábio Ghizoni"
          href="https://www.instagram.com/fabio.ghizoni_"
          className="bg-gradient-to-r text-transparent brightness-125 contrast-125 bg-clip-text 
            from-vinho-normal to-vermelho-normal"
        >
          Fabio Ghizoni
        </Link>
        . Todos os direitos reservados.
      </small>
    </footer>
  );
};

export default FooterFAQ;