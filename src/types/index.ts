import z from "zod"

const productSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number()
})

export type Product = z.infer<typeof productSchema>

const itemsShcema = z.object({
    product: productSchema,
    quantity: z.number().min(1)
})

export type Item = z.infer<typeof itemsShcema>
