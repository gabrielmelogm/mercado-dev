import axios from 'axios'
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

export async function getRecommendedProduct() {
	const response = await axios.get(
		`${process.env.APP_PRODUCTS_URL}/product/recommended`,
	)
	const product = productSchema.parse(response.data)

	return product
}
