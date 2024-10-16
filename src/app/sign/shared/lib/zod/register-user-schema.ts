import { z } from "zod";

export const registerUserSchema = z.object({
  email: z
    .string({ message: "O campo email é obrigatório" })
    .email("Insira um formato de email válido"),
  password: z
    .string({ message: "O campo senha é obrigatório" })
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
});
