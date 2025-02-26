import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const FontPoppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  preload: true,
  style: ["normal", "italic"],
  display: "auto",
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId={process.env.TAG_MANAGER as string} />
      <body className={`${FontPoppins.className} bg-bege-rose`}>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS as string} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.TAG_MANAGER}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            loading="lazy"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
