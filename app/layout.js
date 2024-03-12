import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OteFEST",
  description:
    "Otevíráme zrekonstruované Salesiánské centrum Pardubice: zázemí pro mladé lidi, prostor pro dobrovolnické a dobročinné (nejen) křesťanské aktivity. Buďte u toho s námi!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
