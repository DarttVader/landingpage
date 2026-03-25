"use client";

import { contacts } from "@/types";
import { useState } from "react";
import { useClinic } from "../contexts/ClinicContext";
import ContactForm from "./contact/ContactForm";
import WhatsAppDirect from "./contact/WhatsAppDirect";
import SocialLinks from "./contact/SocialLinks";

const cityToWhatsApp: Record<string, string> = {
  "Pitanga": contacts[0].link,
  "Manoel Ribas": contacts[1].link,
  "Ivaiporã": contacts[2].link,
};

const cityKeyMap: Record<string, string> = {
  "Pitanga": "Pitanga",
  "Manoel": "Manoel Ribas",
  "Ivaiporã": "Ivaiporã",
};

function getInitialCity(clinicCity: string | null): string {
  if (!clinicCity) return "";
  const cityKey = clinicCity.split(" ")[0];
  return cityKeyMap[cityKey] || "";
}

export default function Contact() {
  const { clinic } = useClinic();
  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    city: getInitialCity(clinic?.city ?? null),
    message: "",
    treatment: "",
  }));

  const selectedWhatsApp = cityToWhatsApp[formData.city] || contacts[0].link;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedWhatsApp) return;

    let messageText = `Olá! Meu nome é ${formData.name}.`;
    if (formData.treatment) {
      messageText += ` Gostaria de informações sobre ${formData.treatment}.`;
    }
    if (formData.message) {
      messageText += ` ${formData.message}`;
    }
    messageText += ` Meu telefone/WhatsApp: ${formData.phone}.`;
    if (formData.email) {
      messageText += ` Email: ${formData.email}.`;
    }

    const encodedMessage = encodeURIComponent(messageText);
    const finalLink = selectedWhatsApp.replace("text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20", `text=${encodedMessage}`).replace("text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Manoel%20Ribas.", `text=${encodedMessage}`).replace("text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Ivaipor%C3%A3.", `text=${encodedMessage}`);
    
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
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
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
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <ContactForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="space-y-6">
            <WhatsAppDirect />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
