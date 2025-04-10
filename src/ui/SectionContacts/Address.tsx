"use client";
import { addresses, copyToClipBoard } from "@/exports";
import { MdCopyAll } from "react-icons/md";

const Address = () => {
  return (
    <h1
      className="text-4xl bg-gradient-to-r text-transparent self-start brightness-125 contrast-125 
        bg-clip-text from-vinho-normal to-vinho-escuro2">
      Endereço:
      <div className="space-y-2 mt-2">
        {addresses.map((address, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center">
              <p className="text-xl text-vinho-escuro2 text-nowrap rounded-lg cursor-pointer hover:p-1 
                    max-1170:text-wrap max-1170:text-2xl "
                onClick={() => copyToClipBoard(address.city + ` | ` + address.street)}>
                {address.city} - {address.street}
              </p>
              <span
                onClick={() => copyToClipBoard(address.city + ` | ` + address.street)}
                title={`Clique para copiar "${address.city + ` | ` + address.street}" para área de 
                  tranferência`}
                className="ml-1 rounded-full hover:scale-105 hover:contrast-125 cursor-pointer select-none 
                  group">
                <MdCopyAll
                  className="text-black/60 group-hover:text-vinho-escuro scale-110 
                    cursor-pointer min-w-6 min-h-6 max-w-6 max-h-6 m-2"
                />
              </span>
            </div>
            {index < addresses.length - 1 && (
              <div className="border-t border-vinho-escuro2"></div>
            )}
          </div>
        ))}
      </div>
    </h1>
  );
};

export default Address;

