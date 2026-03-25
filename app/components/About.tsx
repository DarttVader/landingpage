"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-bege-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-2" />
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/dermatologia.jpg"
                alt="Dra. Rafaela Mazieiro - Dermatologista"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
            </div>

            {/* Credentials Card (Desktop) */}
            <div className="absolute -bottom-8 -right-8 glass-card p-6 shadow-2xl max-w-xs hidden lg:block">
              <h4 className="font-display text-lg font-bold text-dark mb-3">
                Formação & Credenciais
              </h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CRM-PR 45288
                </li>

                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Especialista em Dermatologia Clínica e Estética
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Membro da Sociedade Brasileira de Dermatologia
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Credentials Card */}
          <div className="lg:hidden glass-card p-4 shadow-xl">
            <h4 className="font-display text-base font-bold text-dark mb-3">
              Formação & Credenciais
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CRM-PR 45288
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                RQE 21847 - Dermatologia
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Especialista em Dermatologia Clínica e Estética
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Membro da Sociedade Brasileira de Dermatologia
              </li>
            </ul>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 badge-primary mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Sobre a Dra.
            </div>

            {/* Heading */}
            <h2 className="heading-2 mb-6">
              Cuidado <span className="gradient-text">personalizado</span> para sua pele
            </h2>

            {/* Divider */}
            <div className="divider mb-8" />

            {/* Description */}
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Clínica especializada em dermatologia clínica, estética e preventiva, 
                comprometida com o cuidado da saúde e beleza da pele.
              </p>
              <p>
                Oferecemos tratamentos modernos, personalizados e confortáveis, utilizando 
                tecnologias avançadas e técnicas inovadoras para atender às necessidades de 
                nossos pacientes.
              </p>
              <p>
                Seja para cuidar de sua pele, tratar condições dermatológicas ou realizar 
                procedimentos estéticos, nossa prioridade é proporcionar <strong className="text-dark">bem-estar, 
                segurança e resultados naturais</strong>.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contato"
                className="btn-secondary inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden"
              >
                <span>Agendar Consulta</span>
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="heading-2 gradient-text">+5</div>
                <div className="text-sm text-text-secondary">Anos de<br/>Experiência</div>
              </div>
              <div className="text-center">
                <div className="heading-2 gradient-text">+2K</div>
                <div className="text-sm text-text-secondary">Pacientes<br/>Atendidos</div>
              </div>
              <div className="text-center">
                <div className="heading-2 gradient-text">3</div>
                <div className="text-sm text-text-secondary">Cidades<br/>Atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
