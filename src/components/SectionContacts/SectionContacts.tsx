"use client";
import { Address, AllContacts, Contacts, Map } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";

const SectionContacts = () => {
  return (
    <motion.section
      id="section-contacts"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeInOut, type: keyframes }}
      className="w-full md:h-screen flex md:flex-row md:space-x-10 justify-center md:items-center md:px-20 
        md:py-20 h-auto flex-col space-y-10 items-end px-4 py-10">
      <AllContacts>
        <Address />
        <Contacts />
      </AllContacts>
      <Map />
    </motion.section>
  );
};

export default SectionContacts;
