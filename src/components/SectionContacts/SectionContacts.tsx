"use client"
import { Address, AllContacts, Contacts } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import('@/exports').then((mod) => mod.LeafletMap), {
  ssr: false,
  loading: () => (
    <p className="self-center w-full text-center text-4xl">Aguarde um pouco...</p>
  ),
});

const SectionContacts = () => {
  return (
    <motion.section
      id="section-contacts"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
      className="w-full h-screen flex flex-row space-x-10 px-20 py-20 max-1170:h-auto max-1170:flex-col 
        max-1170:space-x-0 max-1170:space-y-10 max-1170:items-end max-1170:px-4 max-1170:py-10">
      <AllContacts>
        <Address />
        <Contacts />
      </AllContacts>
      <LeafletMap />
    </motion.section>
  );
};

export default SectionContacts;
