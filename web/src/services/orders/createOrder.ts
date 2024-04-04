import axios from 'axios'
import { z } from 'zod'

const orderSchema = z.object({
	price: z.number(),
	quantity: z.number().min(1),
	product_id: z.string(),
})

export type IOrderProps = z.infer<typeof orderSchema>

export async function createOrder(order: IOrderProps) {
	const response = await axios.post(
		`${process.env.NEXT_PUBLIC_APP_ORDERS_URL}/orders`,
		order,
	)
	const data = orderSchema.parse(response.data)

	return data
}
