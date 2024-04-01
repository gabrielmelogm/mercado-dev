export class Order {
	id?: string
	price: number
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
