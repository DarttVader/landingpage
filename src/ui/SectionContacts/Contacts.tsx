"use client";
import { contacts, copyToClipBoard } from "@/exports";
import Link from "next/link";
import { MdCopyAll } from "react-icons/md";

const Contacts = () => {
  return (
    <h1
      className="text-4xl bg-gradient-to-r text-transparent self-start mt-5 brightness-125 contrast-125 
        bg-clip-text from-vinho-normal to-vinho-escuro2"
    >
      Contatos:
      <div className="space-y-2 mt-2">
        {contacts.map((contact, index) => (
          <div key={index} className="space-y-2">
            <p className="text-xl max-1170:text-2xl text-vinho-escuro2 flex items-center max-1170:flex-wrap">
              <span
                onClick={() => copyToClipBoard(contact.number)}
                title={`Clique para copiar "${contact.number}" para área de tranferência`}
                className="rounded-lg cursor-pointer hover:contrast-125 hover:scale-105 hover:px-2">
                {contact.number}
              </span>
              <span
                onClick={() => copyToClipBoard(contact.number)}
                title={`Clique para copiar "${contact.number}" para área de tranferência`}
                className="ml-1 rounded-full hover:scale-105 hover:contrast-125 cursor-pointer select-none 
                  group">
                <MdCopyAll
                  className="text-black/60 group-hover:text-vinho-escuro scale-110 
                    cursor-pointer min-w-6 min-h-6 max-w-6 max-h-6 m-2"
                />
              </span>
              <Link
                target="_blank"
                href={contact.link}
                title={`Whatsapp ${contact.location}`}
                className="ml-1 rounded-lg hover:contrast-125 hover:scale-105 hover:px-2 max-1170:mt-4">
                {contact.location}
              </Link>
            </p>
            {index < contacts.length - 1 && (
              <div className="border-t border-vinho-escuro2"></div>
            )}
          </div>
        ))}
      </div>
    </h1>
  );
};

export default Contacts;


