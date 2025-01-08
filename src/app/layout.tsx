import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { GlowingCursor } from './components/GlowingCursor'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloom | Nurture Your Digital Wellbeing",

  description: "A mindful digital platform fostering connection, inspiration, and personal growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlowingCursor />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
