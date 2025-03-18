"use client";
import { SocialIcon } from "@/exports";
import { easeInOut, keyframes, motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Transition = { duration: 0.8, ease: easeInOut, type: keyframes };

const SocialMedia = React.memo(() => {

  const socialLinks = [
    { Href: "http://wa.me/554391030509", Icon: FaWhatsapp, },
    { Href: "https://www.facebook.com/rafaela.mazieiro", Icon: FaFacebook, },
    { Href: "https://www.instagram.com/drarafamazieiro", Icon: FaInstagram, }
  ];

  return (
    <motion.div
      transition={Transition}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex gap-1 w-12 h-12 self-end">
      {socialLinks.map((Social, Index) => (
        <SocialIcon
          key={Index}
          PaddingIcon="1"
          Color="white"
          Size="1.80rem"
          Target="_blank"
          FatherWidth="12"
          FatherHeight="12"
          Icon={Social.Icon}
          Href={Social.Href} />
      ))}
    </motion.div>
  );
});

SocialMedia.displayName = "SocialMedia";
export default SocialMedia;
