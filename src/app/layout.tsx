import "./globals.css";
import type { Metadata } from "next";
import { FooterHome, NavbarHome } from "@/components/index";

export const metadata: Metadata = {
  title: "Neuropsicología Clínica",
  description: "Neuropsicología Clínica"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Neuropsicología Clínica" />
      </head>
      <body
        className={`antialiased`}
      >
        <NavbarHome />
        {children}
        <FooterHome />
      </body>
    </html>
  );
}
