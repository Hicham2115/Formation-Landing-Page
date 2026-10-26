import { z } from "zod";

export const nameSchema = z.string().trim().min(2, "Indiquez votre nom.").max(100);
export const optionalEmailSchema = z.preprocess(
  (value) => (typeof value === "string" ? value.trim() : value),
  z.union([z.literal(""), z.string().email("Adresse e-mail invalide.").max(254)]),
);

export const professionSchema = z.string().trim().min(2, "Indiquez votre profession.").max(100);
export const citySchema = z.string().trim().min(2, "Indiquez votre ville.").max(100);
export const organizationSchema = z
  .string()
  .trim()
  .min(2, "Indiquez votre cabinet ou centre.")
  .max(100);
export const phoneSchema = z
  .string()
  .trim()
  .min(8, "Indiquez votre numéro WhatsApp.")
  .max(24, "Vérifiez le format du numéro.")
  .regex(/^\+?[0-9][0-9\s().-]{6,22}$/, "Vérifiez le format du numéro.");

export const leadSchema = z.object({
  name: nameSchema,
  email: optionalEmailSchema,
  profession: professionSchema,
  city: citySchema,
  organization: organizationSchema,
  whatsapp: phoneSchema,
  intent: z.enum(["booking", "waitlist"]).default("booking"),
});

export type Lead = z.infer<typeof leadSchema>;
