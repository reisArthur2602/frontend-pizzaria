import { z } from "zod";

export const registerCategorySchema = z.object({
  name: z
    .string()
    .min(3, "O nome da categoria deve conter no mínimo 3 caracteres"),
});
