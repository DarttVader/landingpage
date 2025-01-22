import SectionOne from "@/components/SectionOne/SectionOne";
import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <SectionOne>

        </SectionOne>
        {children}
      </body>
    </html>
  );
}
