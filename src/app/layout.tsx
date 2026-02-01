import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Space_Grotesk, Roboto, Open_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/use-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Elabela | Control Pages",
  description: "Plataforma completa para gerenciar e otimizar seus advertoriais dinamicamente.",
  icons: {
    icon: 'https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769936507532-ChatGPT-Image-1-de-fev.-de-2026,-05_59_37-(1).png',
    shortcut: 'https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769936507532-ChatGPT-Image-1-de-fev.-de-2026,-05_59_37-(1).png',
    apple: 'https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769936507532-ChatGPT-Image-1-de-fev.-de-2026,-05_59_37-(1).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${manrope.variable} ${spaceGrotesk.variable} ${roboto.variable} ${openSans.variable} font-sans antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}