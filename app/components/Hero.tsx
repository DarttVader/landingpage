"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ClockIcon, MapPinIcon, UsersIcon, WhatsAppIcon } from "./ui/Icons";
import { useWhatsAppLink } from "@/app/hooks/useClinic";

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: <ClockIcon className="w-4 h-4 text-success shrink-0" />,
    users: <UsersIcon className="w-4 h-4 text-success shrink-0" />,
    mapPin: <MapPinIcon className="w-4 h-4 text-success shrink-0" />,
  };

  return (
    <div className="flex items-center gap-2 text-text-secondary text-sm">
      {icons[icon]}
      <span>{text}</span>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex -space-x-px">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Hero() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <Image
        fill
        src="/fundo1.svg"
        alt="Background Hero Section"
        className="object-cover opacity-90"
      />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 badge-primary mb-6 animate-fade-in">
              <CheckCircleIcon className="w-4 h-4" />
              CRM-PR 45288
            </div>

            <h1 className="heading-1 mb-6 animate-slide-up">
              <span className="gradient-text">Realçando</span> o que há de
              <br />
              <span className="text-primary">melhor em você</span>
            </h1>

            <p
              className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Dermatologia clínica, estética e preventiva com tecnologia de ponta
              e atendimento humanizado. Sua pele merece o melhor cuidado!
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="#tratamentos" className="btn-primary text-center whitespace-nowrap">
                Ver Tratamentos
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                Agendar pelo WhatsApp
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <TrustBadge icon="clock" text="+5 anos de experiência" />
              <TrustBadge icon="users" text="+2.000 pacientes" />
              <TrustBadge icon="mapPin" text="3 clínicas no Paraná" />
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/rafa.svg"
                  alt="Dra. Rafaela Mazieiro - Dermatologista"
                  width={360}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/20 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card p-3 animate-float shadow-xl max-w-45">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-secondary">Atende em</p>
                    <p className="font-semibold text-dark text-xs leading-tight">
                      Pitanga, Manoel Ribas e Ivaiporã
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-1 -right-6 glass-card p-2 animate-float shadow-xl"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-1">
                  <StarRating />
                  <span className="text-[10px] text-text-secondary ml-0.5">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a
          href="#sobre"
          className="flex flex-col items-center text-text-secondary hover:text-primary transition-colors"
        >
          <span className="text-xs mb-1">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}