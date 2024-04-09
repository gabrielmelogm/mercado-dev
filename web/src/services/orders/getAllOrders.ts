import axios from 'axios'
import { z } from 'zod'

const StatusEnum = z.enum(['PENDING', 'PAYED', 'CANCELLED'])

const orderSchema = z.object({
	id: z.string(),
	price: z.number(),
	quantity: z.number(),
	product_id: z.string(),
	status: StatusEnum,
	createdAt: z.string(),
	updatedAt: z.string(),
})

export const STATUS_TRANSLATION = {
	PENDING: 'PENDENTE',
	PAYED: 'PAGO',
	CANCELLED: 'CANCELADO',
}

export type IOrderProps = z.infer<typeof orderSchema>

export async function getAllOrders(): Promise<IOrderProps[]> {
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_APP_ORDERS_URL}/orders`,
	)

	const orders = orderSchema.array().parse(response.data)

	return orders
}
