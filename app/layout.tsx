import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";
import SmoothScroll from "./smooth-scroll";
import AnalyticsScripts from "@/components/analytics-scripts";

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1609974317541216";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.addicslaser.com"),
  title: "Formation en auriculothérapie laser à Mohammedia | Addic’s Laser",
  description:
    "Formation professionnelle d’une journée en auriculothérapie laser à Mohammedia : programme, matériel, tarif, formatrice et inscription.",
  applicationName: "Addic’s Laser",
  keywords: [
    "formation auriculothérapie laser",
    "formation laser auriculaire Maroc",
    "formation professionnelle santé",
    "laser thérapeutique",
    "formation Mohammedia",
    "auriculothérapie pour professionnels de santé",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://www.addicslaser.com/",
    siteName: "Addic’s Laser",
    title: "Formation en auriculothérapie laser à Mohammedia | Addic’s Laser",
    description:
      "Découvrez le programme, le matériel et les modalités de la formation professionnelle en auriculothérapie laser à Mohammedia.",
    images: [
      {
        url: "/images/siham-boulla-hero.jpg",
        width: 4240,
        height: 2832,
        alt: "Formation professionnelle Addic’s Laser en auriculothérapie laser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation en auriculothérapie laser à Mohammedia | Addic’s Laser",
    description:
      "Formation professionnelle d’une journée en auriculothérapie laser à Mohammedia.",
    images: ["/images/siham-boulla-hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${encodeURIComponent(metaPixelId)}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <AnalyticsScripts />
        <SmoothScroll />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
