import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator'

export class CreateOrderDto {
	@ApiProperty({
		minimum: 0.1,
		example: 69.93
	})
	@IsNotEmpty()
	@IsNumber()
	price: number

	@ApiProperty({
		minimum: 1,
		example: 2
	})
	@IsNotEmpty()
	@IsNumber()
	@Min(1)
	quantity: number

	@ApiProperty({
		example: 'clvue8q6l0000kgyi81ujmjgv'
	})
	@IsNotEmpty()
	@IsString()
	product_id: string
}
