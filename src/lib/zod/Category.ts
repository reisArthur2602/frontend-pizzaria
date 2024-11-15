import { z } from "zod";

export const registerCategorySchema = z.object({
  name: z.string().trim().min(1, "O nome é obrigatório"),
});
