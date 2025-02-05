"use client"
import { CopyRight, NavBar, SectionEnd, SectionQuite, SectionTop } from "@/exports";
import { useState } from "react";

export default function Home() {
  const [isOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <NavBar setMenuOpen={setMenuOpen} />
      <SectionTop isOpen={isOpen} />
      <SectionQuite />
      <SectionEnd />
      <CopyRight />
    </div>
  );
}
