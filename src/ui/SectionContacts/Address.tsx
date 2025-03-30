"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";

const CopyToClipboard = (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        window.alert(`"${text}" copiado para área de transferência.`);
      })
      .catch((err) => {
        console.error("Erro ao copiar para a área de transferência via Clipboard API:", err);
        fallbackCopyToClipboard(text);
      });
  } else {
    console.warn("A API Clipboard não é suportada neste navegador.");
    fallbackCopyToClipboard(text);
  }
};

const fallbackCopyToClipboard = (text: string) => {
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
    alert("Desculpe, não conseguimos copiar o endereço. Tente novamente.");
  }
};

const addresses = [
  {
    city: "Pitanga PR",
    street: "Rua Dez de Abril, 251, Centro - 85200-000"
  },
  {
    city: "Manoel Ribas PR",
    street: "Rua Dom Pedro I, 189, Centro - 85260-000"
  },
  {
    city: "Ivaiporã PR",
    street: "Avenida Souza Naves, 1760, Centro - 86870-000"
  },
  {
    city: "São Paulo SP",
    street: ""
  }
];

const Address = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: easeInOut, type: keyframes }}
      className="text-4xl bg-gradient-to-r text-transparent self-start brightness-125 contrast-125 
        bg-clip-text from-vinho-normal to-vinho-escuro2"
    >
      Endereço:
      <div className="space-y-2 mt-2">
        {addresses.map((address, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center">
              <p
                className="text-xl text-vinho-escuro2 text-nowrap rounded-lg cursor-pointer max-1170:text-wrap
                  hover:bg-fugente/30 hover:px-2 max-1170:text-2xl"
                onClick={() => CopyToClipboard(address.city + ` | ` + address.street)}
              >
                {address.city} - {address.street}
              </p>
              <span className="ml-1 bg-fugente/30 group hover:bg-transparent rounded-full">
                <FaRegCopy
                  onClick={() => CopyToClipboard(address.city + ` | ` + address.street)}
                  className="text-vinho-escuro group-hover:opacity-50 cursor-pointer min-w-6 min-h-6 max-w-6
                    max-h-6 m-2"
                />
              </span>
            </div>
            {index < addresses.length - 1 && (
              <div className="border-t border-vinho-escuro2"></div>
            )}
          </div>
        ))}
      </div>
    </motion.h1>
  );
};

export default Address;

