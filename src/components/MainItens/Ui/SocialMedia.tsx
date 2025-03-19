"use client";
import { easeInOut, keyframes, motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Transition = { duration: 0.8, ease: easeInOut, type: keyframes };

const SocialMedia = React.memo(() => {

  const socialLinks = [
    { Href: "https://www.instagram.com/drarafamazieiro", Icon: FaWhatsapp, },
    { Href: "https://www.facebook.com/rafaela.mazieiro", Icon: FaFacebook, },
    { Href: "http://wa.me/554391030509", Icon: FaInstagram, }
  ];

  return (
    <motion.div
      transition={Transition}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-1 w-12 min-h-40 justify-end">
      {socialLinks.map((Social, Index) => (
        <a key={Index} href={Social.Href} target="_blank">
          {/* Container */}
          <div className={`relative flex items-center justify-center w-12 h-12`}>
            {/* Borda animada */}
            <div className={`absolute h-full w-full rounded-full bg-custom-conic animate-spin-slow blur-min 
              p-1`} />
            {/* Ícone central */}
            <div className={`absolute flex p-1 rounded-full bg-rosa-claro`}>
              <Social.Icon color="white" size="2rem" />
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  );
});

SocialMedia.displayName = "SocialMedia";
export default SocialMedia;
