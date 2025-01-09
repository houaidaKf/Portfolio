import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Caveat, Roboto_Mono } from "next/font/google";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean de Dieu - Backend Developer",
  description: "Solopreneur, Backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(robotoMono.variable, caveat.variable, "font-sans")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
