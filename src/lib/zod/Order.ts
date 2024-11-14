import { z } from "zod";

export const registerOrderSchema = z.object({
  table: z.coerce.number({ invalid_type_error: "A mesa deve ser um número" }),
});
