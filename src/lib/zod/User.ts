import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().trim().email("Insira um formato de email válido"),
  password: z
    .string()
    .trim()
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
});

export const sessionUserSchema = z.object({
  email: z.string().trim().email("Insira um formato de email válido"),
  password: z
    .string()
    .trim()
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
});
