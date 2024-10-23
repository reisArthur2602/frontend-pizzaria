import { z } from "zod";

export const registerOrderSchema = z.object({
  table: z.coerce.number({ message: "O campo mesa é obrigatório" }),
});
