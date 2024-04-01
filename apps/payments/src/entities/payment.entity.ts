export class Payment {
	id?: string
	amount: number
	order_id: string
	product_id: string
	status: string
	createdAt?: Date
	updatedAt?: Date
}

export enum PaymentStatus {
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED',
}
