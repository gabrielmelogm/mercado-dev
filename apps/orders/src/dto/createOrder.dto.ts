import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateOrderDto {
	@IsNotEmpty()
	@IsNumber()
	price: number

	@IsNotEmpty()
	@IsString()
	product_id: string
}
