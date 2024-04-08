import axios from 'axios'
import { z } from 'zod'

const orderSchema = z.object({
	id: z.string(),
	price: z.number(),
	quantity: z.number(),
	product_id: z.string(),
	status: z.enum(['PENDING', 'PAYED', 'CANCELLED']),
	createdAt: z.string(),
	updatedAt: z.string(),
})

export type IOrderProps = z.infer<typeof orderSchema>

export async function getAllOrders(): Promise<IOrderProps[]> {
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_APP_ORDERS_URL}/orders`,
	)

	const orders = orderSchema.array().parse(response.data)

	return orders
}
