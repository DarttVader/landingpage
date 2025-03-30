"use client"
import { easeInOut, keyframes, motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Transition = { duration: 0.6, ease: easeInOut, type: keyframes };

const SocialMedia = React.memo(() => {

  const socialLinks = [
    { Href: "http://wa.me/554391030509", Icon: FaWhatsapp, Title: "Whatsapp Rafaela Mazieiro" },
    { Href: "https://www.instagram.com/drarafamazieiro", Icon: FaInstagram, Title: "Instagram Rafaela Mazieiro" },
    { Href: "https://www.facebook.com/rafaela.mazieiro", Icon: FaFacebook, Title: "Facebook Rafaela Mazieiro" },
  ];

  return (
    <motion.div
      transition={Transition}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-1 min-h-40 justify-end self-center">
      {socialLinks.map((Social, Index) => (
        <a key={Index} href={Social.Href} target="_blank" title={Social.Title}>
          <div className={`flex w-12 h-12 relative items-center justify-center bg-rosa-claro border-2 
            border-white p-2 rounded-full hover:scale-105 hover:contrast-125 shadow-2xl drop-shadow-2xl`}>
            <Social.Icon color="white" size="2rem" />
          </div>
        </a>
      ))}
    </motion.div>
  );
});

SocialMedia.displayName = "SocialMedia";
export default SocialMedia;
