import "./globals.css";

export const metadata = {
  title: "OteFEST",
  description:
    "Otevíráme zrekonstruované Salesiánské centrum Pardubice: zázemí pro mladé lidi, prostor pro dobrovolnické a dobročinné (nejen) křesťanské aktivity. Buďte u toho s námi!",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={`font-chronicaProBook`}>{children}</body>
    </html>
  );
}
