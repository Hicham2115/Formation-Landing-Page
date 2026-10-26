"use client";

import { useForm } from "@tanstack/react-form";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { z } from "zod";
import Label from "@/components/section-label";
import { phone } from "@/lib/site";

const nameSchema = z.string().trim().min(2, "Indiquez votre nom.").max(100);
const emailSchema = z.string().trim().email("Adresse e-mail invalide.").max(254);
const professionSchema = z.string().trim().min(2, "Indiquez votre profession.").max(100);
const messageSchema = z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères.").max(2000);

const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  profession: professionSchema,
  message: messageSchema,
});

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand focus:ring-2 focus:ring-brand/25";

function FieldError({ errors }: { errors: Array<string | undefined> }) {
  const error = errors.find(Boolean);
  if (!error) return null;
  return <p className="mt-1.5 text-xs text-[#ffaaa5]">{error}</p>;
}

export default function ContactFormSection() {
  const form = useForm({
    defaultValues: { name: "", email: "", profession: "", message: "" },
    onSubmit: async ({ value }) => {
      const result = contactSchema.safeParse(value);
      if (!result.success) return;

      const message = [
        "Bonjour, je souhaite des informations sur la formation au laser auriculaire.",
        "",
        `Nom : ${result.data.name}`,
        `E-mail : ${result.data.email}`,
        `Profession : ${result.data.profession}`,
        "",
        result.data.message,
      ].join("\n");
      const whatsappNumber = phone.replace(/\D/g, "");
      window.location.assign(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      );
    },
  });

  return (
    <section
      className="my-16 grid gap-8 rounded-[28px] bg-ink px-6 py-9 text-white sm:my-20 sm:px-9 sm:py-12 lg:my-24 lg:grid-cols-[.78fr_1.22fr] lg:gap-14 lg:px-14 lg:py-14"
      id="contact-form"
      aria-labelledby="contact-form-title"
    >
      <div className="flex flex-col items-start">
        <Label>CONTACTEZ-NOUS</Label>
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
          <MessageCircle size={17} className="text-brand" />
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
                  Nom complet
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  autoComplete="name"
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
            name="email"
            validators={{
              onSubmit: ({ value }) => emailSchema.safeParse(value).success ? undefined : "Saisissez une adresse e-mail valide.",
            }}
          >
            {(field) => (
              <div>
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Adresse e-mail
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

          <form.Field
            name="profession"
            validators={{
              onSubmit: ({ value }) => professionSchema.safeParse(value).success ? undefined : "Indiquez votre profession.",
            }}
          >
            {(field) => (
              <div className="sm:col-span-2">
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Profession
                </label>
                <input
                  className={fieldClassName}
                  id={field.name}
                  name={field.name}
                  autoComplete="organization-title"
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
            name="message"
            validators={{
              onSubmit: ({ value }) => messageSchema.safeParse(value).success ? undefined : "Ajoutez un message d’au moins 10 caractères.",
            }}
          >
            {(field) => (
              <div className="sm:col-span-2">
                <label className="text-[13px] font-medium text-white/90" htmlFor={field.name}>
                  Votre question
                </label>
                <textarea
                  className={`${fieldClassName} min-h-32 resize-y`}
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Dites-nous ce que vous souhaitez savoir…"
                  aria-invalid={field.state.meta.errors.length > 0}
                  rows={4}
                />
                <FieldError errors={field.state.meta.errors} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-[13px] leading-5 text-white/60">
            Le message s’ouvrira dans WhatsApp pour être envoyé à l’équipe.
          </p>
          <button
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-brand px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            type="submit"
          >
            Envoyer ma question <ArrowUpRight size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}
