import { z } from "zod";

export const registerProductSchema = z.object({
  name: z.string({ message: "O campo nome é obrigatório" }),
  description: z.string({ message: "O campo descrição é obrigatório" }),
  price: z.coerce.number({ message: "O campo preço é obrigatório" }),
});
