import { socialLinks } from "@/exports";
import React from "react";

const SocialMedia = React.memo(() => {
  return (
    <div
      className="flex flex-col gap-1 min-h-40 justify-end self-center">
      {socialLinks.map((Social, Index) => (
        <a key={Index} href={Social.Href} target="_blank" title={Social.Title}>
          <div className={`flex w-12 h-12 relative items-center justify-center bg-rosa-claro border-2 
            border-white p-2 rounded-full hover:scale-105 hover:contrast-125 shadow-2xl drop-shadow-2xl`}>
            <Social.Icon color="white" size="2rem" />
          </div>
        </a>
      ))}
    </div>
  );
});

SocialMedia.displayName = "SocialMedia";
export default SocialMedia;
