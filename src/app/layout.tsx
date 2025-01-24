import { Sidebar, TitleCenter } from "@/exports";
//import Cascadia from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

/* const Cascadia = Cascadia({
  variable: "",
  subsets: "",
}); */

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
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Sidebar></Sidebar>
        <TitleCenter></TitleCenter>
        {children}
      </body>
    </html>
  );
}
