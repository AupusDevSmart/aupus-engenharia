import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  // Título que aparece na aba (SEO Friendly)
  title: "Aupus Engenharia",
  
  // Descrição que aparece no Google
  description: "Parte do Grupo Santares. Soluções de engenharia EPC Turnkey, subestações até 500kV, manutenção de ativos e mobilidade elétrica. Sede no Brookfield Towers.",
  
  // Palavras-chave para indexação (opcional, mas bom ter)
  keywords: ["Engenharia Elétrica", "Subestações", "500kV", "EPC Turnkey", "Grupo Santares", "Aupus Charge"],
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-aupus-white text-aupus-navy antialiased selection:bg-aupus-green selection:text-aupus-navy overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}