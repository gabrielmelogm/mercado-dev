import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator'

export class CreateOrderDto {
	@IsNotEmpty()
	@IsNumber()
	price: number

	@IsNotEmpty()
	@IsNumber()
	@Min(1)
	quantity: number

	@IsNotEmpty()
	@IsString()
	product_id: string
}
