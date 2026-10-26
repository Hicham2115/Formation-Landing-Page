"use client";

import { useForm } from "@tanstack/react-form";
import { AlertCircle, ArrowUpRight, CheckCircle2, MapPin, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Label from "@/components/section-label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { BOOKING_MESSAGE, phone } from "@/lib/site";
import { trackConversion } from "@/lib/analytics";
import {
  citySchema,
  leadSchema,
  nameSchema,
  optionalEmailSchema,
  organizationSchema,
  phoneSchema,
  professionSchema,
} from "@/lib/lead-schema";

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand focus:ring-2 focus:ring-brand/25";

function FieldError({ errors }: { errors: Array<string | undefined> }) {
  const error = errors.find(Boolean);
  if (!error) return null;
  return <p className="mt-1.5 text-xs text-[#ffaaa5]">{error}</p>;
}

export default function ContactFormSection() {
  const [confirmation, setConfirmation] = useState<{
    whatsappUrl: string;
    waitingList: boolean;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = window.setTimeout(() => setToastMessage(null), 6000);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  const form = useForm({
    defaultValues: {
      name: "",
      profession: "",
      city: "",
      organization: "",
      whatsapp: "",
      email: "",
    },
    onSubmit: async ({ value }) => {
      const waitingList = new URLSearchParams(window.location.search).get("intent") === "waitlist";
      const parsedLead = leadSchema.safeParse({
        ...value,
        intent: waitingList ? "waitlist" : "booking",
      });
      if (!parsedLead.success) return;

      setToastMessage(null);
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsedLead.data),
        });
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        if (!response.ok) {
          throw new Error(payload.error ?? "Impossible d’enregistrer votre demande.");
        }
      } catch (error) {
        setToastMessage(
          error instanceof Error && error.message !== "Failed to fetch"
            ? error.message
            : "Votre demande n’a pas pu être enregistrée. Vérifiez votre connexion puis réessayez.",
        );
        return;
      } finally {
        setIsSubmitting(false);
      }

      const message = [
        waitingList
          ? "Bonjour, je souhaite être inscrit·e sur la liste d’attente de la prochaine session de formation laser auriculaire."
          : BOOKING_MESSAGE,
        "",
        `Nom : ${parsedLead.data.name}`,
        `Profession : ${parsedLead.data.profession}`,
        `Ville : ${parsedLead.data.city}`,
        `Cabinet / centre : ${parsedLead.data.organization}`,
        `Téléphone WhatsApp : ${parsedLead.data.whatsapp}`,
        ...(parsedLead.data.email ? [`E-mail : ${parsedLead.data.email}`] : []),
      ].join("\n");
      const whatsappNumber = phone.replace(/\D/g, "");
      void trackConversion("form_submit");
      setConfirmation({
        whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        waitingList,
      });
    },
  });

  return (
    <section
      className="my-16 grid gap-8 rounded-[28px] bg-ink px-6 py-9 text-white sm:my-20 sm:px-9 sm:py-12 lg:my-24 lg:grid-cols-[.78fr_1.22fr] lg:gap-14 lg:px-14 lg:py-14"
      id="contact-form"
      aria-labelledby="contact-form-title"
    >
      <div className="flex flex-col items-start">
        <Label tone="light">CONTACTEZ-NOUS</Label>
        <h2
          className="mt-5 max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-5xl lg:text-6xl"
          id="contact-form-title"
        >
          Parlons de votre projet de formation.
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-white/70 sm:text-base">
          Vous êtes médecin ou professionnel·le de santé ? Envoyez votre
          question à l’équipe et nous vous répondrons au sujet de la session.
        </p>
        <a
          href={`tel:${phone}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Phone size={17} className="text-brand" />
          Ou appelez le +212 613 755 122
        </a>
      </div>

      <form
        className="rounded-[22px] border border-white/10 bg-white/[.045] p-5 sm:p-7"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <form.Field
            name="name"
            validators={{
              onSubmit: ({ value }) => nameSchema.safeParse(value).success ? undefined : "Indiquez votre nom (2 caractères minimum).",
            }}
          >
            {(field) => (
              <div>
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Nom complet <span className="text-brand">*</span>
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  autoComplete="name"
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Votre nom"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="profession"
            validators={{
              onSubmit: ({ value }) => professionSchema.safeParse(value).success ? undefined : "Indiquez votre profession.",
            }}
          >
            {(field) => (
              <div className="sm:col-span-2">
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Profession <span className="text-brand">*</span>
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  autoComplete="organization-title"
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Ex. médecin, infirmier·ère, kinésithérapeute…"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="city"
            validators={{
              onSubmit: ({ value }) => citySchema.safeParse(value).success ? undefined : "Indiquez votre ville.",
            }}
          >
            {(field) => (
              <div>
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Ville <span className="text-brand">*</span>
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Votre ville"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="organization"
            validators={{
              onSubmit: ({ value }) => organizationSchema.safeParse(value).success ? undefined : "Indiquez votre cabinet ou centre.",
            }}
          >
            {(field) => (
              <div>
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Cabinet / centre <span className="text-brand">*</span>
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  autoComplete="organization"
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Nom de votre structure"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="whatsapp"
            validators={{
              onSubmit: ({ value }) => phoneSchema.safeParse(value).success ? undefined : "Indiquez un numéro WhatsApp valide.",
            }}
          >
            {(field) => (
              <div>
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Téléphone WhatsApp <span className="text-brand">*</span>
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  type="tel"
                  autoComplete="tel"
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="+212 6 00 00 00 00"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onSubmit: ({ value }) => optionalEmailSchema.safeParse(value).success ? undefined : "Saisissez une adresse e-mail valide.",
            }}
          >
            {(field) => (
              <div>
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Adresse e-mail <span className="text-white/45">(facultatif)</span>
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  type="email"
                  autoComplete="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="vous@exemple.com"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-[13px] leading-5 text-white/60">
            Un conseiller vous contacte sur WhatsApp pour confirmer votre place et les modalités de paiement.
          </p>
          <button
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-brand px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enregistrement…" : "Réserver ma place"} <ArrowUpRight size={16} />
          </button>
        </div>
      </form>

      {toastMessage && (
        <div
          className="fixed bottom-4 right-4 z-[70] flex w-[min(92vw,25rem)] items-start gap-3 rounded-2xl border border-[#ffaaa5]/25 bg-[#211514]/95 p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,.38)] backdrop-blur-xl sm:bottom-6 sm:right-6"
          role="alert"
          aria-live="assertive"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#ffaaa5]/10 text-[#ffaaa5]">
            <AlertCircle size={19} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-sm font-semibold tracking-[-.01em]">Enregistrement impossible</p>
            <p className="mt-1 text-[13px] leading-5 text-white/70">{toastMessage}</p>
          </div>
          <button
            className="-mr-1 -mt-1 grid size-8 shrink-0 place-items-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            type="button"
            aria-label="Fermer le message d’erreur"
            onClick={() => setToastMessage(null)}
          >
            <X size={16} />
          </button>
        </div>
      )}

      <Sheet
        open={confirmation !== null}
        onOpenChange={(open) => {
          if (!open) setConfirmation(null);
        }}
      >
        <SheetContent
          side="bottom"
          showCloseButton
          style={{
            left: "50%",
            right: "auto",
            top: "50%",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "min(92vw, 30rem)",
          }}
          className="max-h-[90dvh] overflow-y-auto rounded-[28px] border border-white/10 bg-ink p-6 text-white sm:p-8"
        >
          <SheetHeader className="items-center p-0 text-center">
            <span className="mb-2 grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
              <CheckCircle2 size={25} />
            </span>
            <SheetTitle className="text-center text-2xl font-medium leading-tight tracking-[-.04em] text-white">
              Merci, votre demande est enregistrée.
            </SheetTitle>
            <SheetDescription className="pt-1 text-center text-[15px] leading-7 text-white/70">
              {confirmation?.waitingList
                ? "Votre demande figure sur notre liste d’attente. Notre équipe vous contactera bientôt au sujet de la prochaine session."
                : "Notre équipe vous contactera bientôt sur WhatsApp pour confirmer votre place et les modalités de paiement."}
            </SheetDescription>
          </SheetHeader>
          <button
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            type="button"
            onClick={() => setConfirmation(null)}
          >
            Fermer
          </button>
        </SheetContent>
      </Sheet>

      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[.045] lg:col-span-2">
        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
              <MapPin size={19} />
            </span>
            <div>
              <p className="text-[11px] font-semibold tracking-[.12em] text-white/55">
                NOUS TROUVER
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Centre Addic’s Laser · Boulevard Hassan II · Mohammedia
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps?q=33.71052551269531,-7.396710395812988&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Ouvrir dans Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
        <iframe
          className="h-[300px] w-full border-0 sm:h-[380px] lg:h-[420px]"
          src="https://maps.google.com/maps?q=33.71052551269531,-7.396710395812988&z=17&output=embed"
          title="Carte du Centre Addic’s Laser à Mohammedia"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
