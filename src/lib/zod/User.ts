import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email("Insira um formato de email válido"),
  password: z
    .string({ required_error: "A senha é obrigatória" })
    .trim()
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
});

export const sessionUserSchema = z.object({
  email: z.string().email("Insira um formato de email válido"),
  password: z
    .string({ required_error: "A senha é obrigatória" })
    .trim()
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
});
