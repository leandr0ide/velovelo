import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  website: z.string().url("URL inválida"),
  company: z.string().optional(),
  objective: z.string().optional(),
  comments: z.string().optional(),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad"
  })
});

export const speedTestSchema = z.object({
  url: z.string().url("URL inválida")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SpeedTestData = z.infer<typeof speedTestSchema>;
