import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";
import SmoothScroll from "./smooth-scroll";
import AnalyticsScripts from "@/components/analytics-scripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formation laser auriculaire à Mohammedia | Addic’s Laser",
  description:
    "Une journée de formation au laser auriculaire pour les professionnels de santé, avec laser professionnel inclus. Mohammedia, le 31 octobre 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnalyticsScripts />
        <SmoothScroll />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
