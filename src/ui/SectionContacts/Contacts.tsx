"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import Link from "next/link";
import { FaRegCopy } from "react-icons/fa6";

const CopyToClipboard = (text: string) => {
  // API Moderna 
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        window.alert(`"${text}" copiado para área de transferência.`);
      })
      .catch((err) => {
        console.error("Erro ao copiar para a área de transferência via Clipboard API:", err);
        fallbackCopyToClipboard(text);  // Fallback API ExecCommand
      });
  } else {
    // Fallback API ExecCommand
    console.warn("A API Clipboard não é suportada neste navegador.");
    fallbackCopyToClipboard(text);
  }
};

const fallbackCopyToClipboard = (text: string) => {
  // Caso a API moderna não esteja disponível, usar a API de ExecCommand(antiga e descontinuada)
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    window.alert(`"${text}" copiado para área de transferência.`);
  } catch (err) {
    console.error("Erro ao copiar com execCommand:", err);
    alert("Desculpe, não conseguimos copiar o número. Tente novamente.");
  }
};
const Contacts = () => {
  const contacts = [
    {
      number: "(43)99968-4679", location: "Pitanga - LM Clínica",
      link: "https://api.whatsapp.com/send/?phone=5543999684679&text&type=phone_number&app_absent=0"
    },
    {
      number: "(43)99613-4770", location: "Manoel Ribas - Clínica Estética e Saúde",
      link: "https://api.whatsapp.com/send/?phone=5543996134770&text&type=phone_number&app_absent=0"
    },
    {
      number: "(43)3472-3446", location: "Ivaiporã - Clínica São Lucas",
      link: "https://api.whatsapp.com/send/?phone=5543998130857&text&type=phone_number&app_absent=0"
    },
  ];

  return (
    <motion.h1
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
      className="text-4xl bg-gradient-to-r text-transparent self-start mt-5 brightness-125 contrast-125 
        bg-clip-text from-vinho-normal to-vinho-escuro2"
    >
      Contatos:
      <div className="space-y-2 mt-2">
        {contacts.map((contact, index) => (
          <div key={index} className="space-y-2">
            <p className="text-xl max-1170:text-2xl text-vinho-escuro2 flex items-center max-1170:flex-wrap">
              <span
                onClick={() => CopyToClipboard(contact.number)}
                className="rounded-lg cursor-pointer hover:bg-fugente/30 hover:px-2">
                {contact.number}
              </span>
              <span className="bg-fugente/30 group hover:bg-transparent ml-1 rounded-full">
                <FaRegCopy
                  onClick={() => CopyToClipboard(contact.number)}
                  className="text-vinho-escuro group-hover:opacity-50 cursor-pointer min-w-6 min-h-6 max-w-6
                    max-h-6 m-2"
                />
              </span>
              <Link
                target="_blank"
                href={contact.link}
                className="ml-1 rounded-lg hover:bg-fugente/30 hover:px-2">
                {contact.location}
              </Link>
            </p>
            {index < contacts.length - 1 && (
              <div className="border-t border-vinho-escuro2"></div>
            )}
          </div>
        ))}
      </div>
    </motion.h1>
  );
};

export default Contacts;


