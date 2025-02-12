import { Lora, Merriweather, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const FontPlayFair = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair",
  weight: "500",
});

const FontMerriweather = Merriweather({
  subsets: ["latin"],
  variable: "--merriweather",
  weight: "400",
});

const FontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: "400",
});

const FontLora = Lora({
  subsets: ["latin"],
  variable: "--lora",
  weight: "500",
  style: "normal",
  display: "auto",
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className={`${FontPlayFair.variable} ${FontPoppins.variable} ${FontLora.variable} 
        ${FontMerriweather.variable} bg-black font-poppins`}>

        {children}
      </body>
    </html >
  );
};

export default RootLayout;
