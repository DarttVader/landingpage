import { contacts } from "@/types";

export function buildWhatsAppMessage(
  baseLink: string,
  data: {
    name?: string;
    phone?: string;
    email?: string;
    treatment?: string;
    message?: string;
  }
): string {
  let message = "";

  if (data.name) {
    message += `Olá! Meu nome é ${data.name}.`;
  }

  if (data.treatment) {
    message += ` Gostaria de informações sobre ${data.treatment}.`;
  }

  if (data.message) {
    message += ` ${data.message}`;
  }

  if (data.phone) {
    message += ` Meu telefone/WhatsApp: ${data.phone}.`;
  }

  if (data.email) {
    message += ` Email: ${data.email}.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return baseLink.replace(/text=[^&]+/, `text=${encodedMessage}`);
}

export function getWhatsAppLink(city: string): string {
  const cityMap: Record<string, string> = {
    "Pitanga": contacts[0].link,
    "Manoel Ribas": contacts[1].link,
    "Ivaiporã": contacts[2].link,
  };
  return cityMap[city] || contacts[1].link;
}