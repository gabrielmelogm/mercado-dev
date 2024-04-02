import z from 'zod'

export const productSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string().nullable(),
	thumb: z.string().url(),
	price: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
})

export type IProductProps = z.infer<typeof productSchema>

export async function getProject(id: string) {}
