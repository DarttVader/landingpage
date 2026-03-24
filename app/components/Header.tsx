"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "./ui/Icons";
import Logo from "./ui/Logo";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5543996134770&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20">
      <nav className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#inicio" className="shrink-0">
          <Logo className="p-4"/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dark hover:text-primary transition-colors font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp animate-pulse-glow"
          >
            <WhatsAppIcon size={20} />
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          <div className="w-8 h-7 flex flex-col justify-between">
            <span className={`h-1 bg-dark transition-all rounded-[1px] ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`} />
            <span className={`h-1 bg-dark transition-all rounded-[1px] ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-1 bg-dark transition-all rounded-[1px] ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass-effect transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-dark hover:text-primary transition-colors font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center"
          >
            <WhatsAppIcon size={18} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
