"use client";

import { ArrowRight, ArrowUpRight, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import BrandLockup from "@/components/brand-lockup";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/layout/navigation-links";
import { phone } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Ouvrir le menu"
        className="grid size-11 place-items-center rounded-full border border-divider bg-white transition hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:hidden"
      >
        <Menu size={20} strokeWidth={1.8} />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton
        className="w-[min(88vw,420px)] gap-0 border-l border-divider bg-white p-0 text-ink sm:max-w-[420px]"
      >
        <div className="flex min-h-full flex-col">
          <SheetHeader className="border-b border-divider px-7 pb-7 pt-8 sm:px-9 sm:pt-10">
            <BrandLockup className="mb-10" />
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-brand">
              Menu
            </p>
            <SheetTitle className="text-3xl font-semibold tracking-[-.05em] text-ink">
              Explorez la formation
            </SheetTitle>
            <SheetDescription className="mt-2 max-w-[280px] text-sm leading-6 text-neutral-500">
              Toutes les informations pour lancer votre activité en toute confiance.
            </SheetDescription>
          </SheetHeader>

          <nav className="px-7 py-5 sm:px-9" aria-label="Navigation mobile">
            {navigationLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex min-h-[68px] items-center justify-between border-b border-divider text-[17px] font-medium tracking-[-.02em] transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-wide text-neutral-400">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                  className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-brand"
                />
              </a>
            ))}
          </nav>

          <div className="mt-auto bg-[#f7f7f6] px-7 py-7 sm:px-9 sm:py-8">
            <p className="mb-4 text-xs leading-5 text-neutral-500">
              Prête à vous lancer ? Échangeons sur votre projet.
            </p>
            <a
              href="#contact-form"
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between rounded-full bg-brand px-5 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span className="flex items-center gap-2.5">
                <MessageCircle size={16} />
                Nous contacter
              </span>
              <ArrowUpRight size={18} />
            </a>
            <p className="mt-4 text-center text-[11px] text-neutral-500">
              <a className="transition hover:text-brand" href={`tel:${phone}`}>
                +212 6 13 75 51 22
              </a>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
