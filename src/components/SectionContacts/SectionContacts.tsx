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
      className="h-full w-full flex flex-col min-w-64 min-h-64"
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
      className="w-screen h-screen flex flex-col p-5 py-10 md:p-10 md:py-16 lg:flex-row min-w-67
        overflow-hidden">
      <AllContacts>
        <Address />
        <Contacts />
      </AllContacts>
      <LeafletMap />
    </motion.section>
  );
};

export default SectionContacts;
