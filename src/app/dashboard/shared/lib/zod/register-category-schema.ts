import { z } from "zod";

export const registerCategorySchema = z.object({
  name: z.string({ message: "O campo nome é obrigatório" }),
});
