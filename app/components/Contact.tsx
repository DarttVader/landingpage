"use client";

import { contacts } from "@/types";
import { useState } from "react";

const cityToWhatsApp: Record<string, string> = {
  "Pitanga": contacts[0].link,
  "Manoel Ribas": contacts[1].link,
  "Ivaiporã": contacts[2].link,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    treatment: "",
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    
    const whatsappLink = cityToWhatsApp[formData.city];
    if (!whatsappLink) return;

    let message = `Olá! Meu nome é ${formData.name}.`;
    if (formData.treatment) {
      message += ` Gostaria de informações sobre ${formData.treatment}.`;
    }
    if (formData.message) {
      message += ` ${formData.message}`;
    }
    message += ` Meu telefone/WhatsApp: ${formData.phone}.`;
    if (formData.email) {
      message += ` Email: ${formData.email}.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const finalLink = whatsappLink.replace("text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20", `text=${encodedMessage}`).replace("text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Manoel%20Ribas.", `text=${encodedMessage}`).replace("text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Ivaipor%C3%A3.", `text=${encodedMessage}`);
    
    window.open(finalLink, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="section-padding bg-linear-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 badge-primary mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contato
          </div>
          <h2 className="heading-2 mb-6">
            Agende sua <span className="gradient-text">consulta</span>
          </h2>
          <div className="divider mx-auto" />
          <p className="text-lg text-text-secondary mt-6">
            Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp 
            para agendar sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                {/* City & Treatment */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-dark mb-2">
                      Cidade *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="Pitanga">Pitanga</option>
                      <option value="Manoel Ribas">Manoel Ribas</option>
                      <option value="Ivaiporã">Ivaiporã</option>
                      <option value="Outra">Outra cidade</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-dark mb-2">
                      Tratamento de interesse
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="Consulta Dermatológica">Consulta Dermatológica</option>
                      <option value="Flacidez">Flacidez da Pele</option>
                      <option value="Cancer de Pele">Rastreamento Câncer de Pele</option>
                      <option value="Alopecia">Alopecia</option>
                      <option value="Botox">Botox</option>
                      <option value="Preenchimento">Preenchimento</option>
                      <option value="Peeling">Peeling Químico</option>
                      <option value="Laser">Laser</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="Descreva brevemente sua necessidade..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-whatsapp w-full justify-center"
                >
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      Enviar pelo WhatsApp
                    </>
                </button>
              </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Direct */}
            <a
              href="https://api.whatsapp.com/send/?phone=5543996134770&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-whatsapp text-white rounded-3xl p-8 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-3 text-white mb-1">Fale Diretamente</h3>
                  <p className="text-white/80">Resposta mais rápida pelo WhatsApp</p>
                </div>
              </div>
              <div className="text-2xl font-bold">(43) 99613-4770</div>
            </a>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="heading-3 mb-6">Siga-me nas redes sociais</h3>
              
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/drarafamazieiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-dark group-hover:text-primary transition-colors">Instagram</p>
                    <p className="text-sm text-text-secondary">@drarafamazieiro</p>
                  </div>
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/rafaela.mazieiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-dark group-hover:text-primary transition-colors">Facebook</p>
                    <p className="text-sm text-text-secondary">/rafaela.mazieiro</p>
                  </div>
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
