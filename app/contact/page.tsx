import type { Metadata } from "next";
import ContactFormSection from "@/components/contact-form-section";
import SiteFooter from "@/components/site-footer";
import StickyUrgencyBar from "@/components/sticky-urgency-bar";
import Header from "@/layout/header";

export const metadata: Metadata = {
  title: "Contact | Full International Academy",
  description:
    "Contactez l’équipe de Full International Academy pour réserver votre place à la formation auriculothérapie laser à Mohammedia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div
      className="mx-auto w-full max-w-[1440px] px-3 pb-3 text-ink sm:px-5 lg:px-7"
      id="top"
    >
      <StickyUrgencyBar />
      <Header />
      <main>
        <ContactFormSection />
      </main>
      <SiteFooter />
    </div>
  );
}
