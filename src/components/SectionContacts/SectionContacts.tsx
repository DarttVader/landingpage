"use client";
import { Address, Contacts } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface AllContactsProps {
  children: ReactNode;
}

const LeafletMap = dynamic(() => import('@/exports').then((mod) => mod.LeafletMap), {
  ssr: false,
  loading: () => (
    <p >Aguarde um pouco...</p>
  ),
});

const AllContacts = ({ children }: AllContactsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-11/12 w-11/12 flex flex-col"
      transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}>
      {children}
    </motion.div>
  );
};

const SectionContacts = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
      className="w-full h-screen flex flex-row space-x-2 px-28 py-20 z-2 max-1170:w-auto max-1170:flex-col 
        max-1170:space-y-2 max-1170:items-end">
      <AllContacts>
        <Address />
        <Contacts />
      </AllContacts>
      <LeafletMap />
    </motion.section>
  );
};

export default SectionContacts;
