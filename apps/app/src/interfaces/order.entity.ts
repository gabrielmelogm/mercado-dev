export class Order {
	id?: string
	price: number
	quantity: number
	product_id: string
	status: string
	createdAt?: Date
	updatedAt?: Date
}

export enum OrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	CANCELLED = 'CANCELLED',
}
