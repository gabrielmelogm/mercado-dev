export class Order {
	id?: string
	price: number
	product_id: string
	status: OrderStatus
	createdAt?: Date
	updatedAt?: Date
}

enum OrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	CANCELLED = 'CANCELLED',
}
