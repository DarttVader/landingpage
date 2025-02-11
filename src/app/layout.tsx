import Lora from "next/font/local";
import "./globals.css";

const FontLora = Lora({
  src: "../fonts/Lora/static/Lora-Regular.ttf",
  variable: "--lora-regular",
});
        
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="pt-br">
      <body className={`${FontLora.variable} font-lora`}>

        {children}
      </body>
    </html >
  );
};

export default RootLayout;
