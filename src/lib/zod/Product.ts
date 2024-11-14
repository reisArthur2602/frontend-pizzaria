import { z } from "zod";

export const registerProductSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório.",
  }),

  price: z
    .number({
      invalid_type_error: "O preço é obrigatório.",
    })
    .positive({
      message: "O valor deve ser um número positivo.",
    }),

  category_id: z.string({ required_error: "A categoria é obrigatória" }),
  description: z.string().trim().min(1, {
    message: "A descrição é obrigatória.",
  }),

  image_url: z
    .instanceof(File, { message: "A imagem do produto é obrigatória" })
    .refine(
      (file) =>
        file && (file.type === "image/jpeg" || file.type === "image/png"),
      {
        message: "A imagem deve estar no formato PNG ou JPEG.",
      },
    ),
});
