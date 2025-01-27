import { CopyRight, SectionOne, Sidebar } from "@/exports";
import type { Metadata } from "next";
import Verdana from "next/font/local";
import "./globals.css";


const FontVerdana = Verdana({
  src: '../fonts/Verdana/verdana.ttf',
  variable: '--verdana',
})

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});  */

export const metadata: Metadata = {
  title: "Rafaela Mazieiro",
  description: "Website created by Fabio Ghizoni using NextJS",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br" className={`${FontVerdana.variable} font-verdana`}>
      <body className="antialiased">
        <Sidebar></Sidebar>
        <SectionOne></SectionOne>
        <CopyRight></CopyRight>
        {children}
      </body>
    </html>
  );
}
