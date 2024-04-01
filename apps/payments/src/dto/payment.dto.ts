import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { PaymentStatus } from '../entities/payment.entity'

export class PaymentDto {
	@IsNotEmpty()
	@IsNumber()
	amount: number

	@IsNotEmpty()
	@IsString()
	order_id: string

	@IsNotEmpty()
	@IsString()
	product_id: string

	@IsNotEmpty()
	@IsEnum(['APPROVED', 'REJECTED'])
	status: PaymentStatus
}
