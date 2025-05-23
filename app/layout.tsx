// Já o layout.tsx é um arquivo que define o layout da aplicação, ou seja, a estrutura básica que será aplicada em todas as páginas. O layout pode incluir elementos como cabeçalho, rodapé e barra de navegação, que serão exibidos em todas as páginas da aplicação. O conteúdo específico de cada página é renderizado dentro do layout, permitindo uma estrutura consistente em toda a aplicação.

import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./_components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
