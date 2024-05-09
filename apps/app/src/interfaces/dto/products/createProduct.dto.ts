import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateProductDto {
	@ApiProperty({
		example: 'HQ Nº1 Amazing Spiderman'
	})
	@IsString()
	@IsNotEmpty()
	title: string

	@ApiProperty({
		example: 'Spiderman version Nº 1'
	})
	@IsString()
	@IsOptional()
	description?: string

	@ApiProperty({
		example: 'https://http2.mlstatic.com/D_NQ_NP_757460-MLB50284638311_062022-O.webp'
	})
	@IsString()
	@IsNotEmpty()
	thumb: string

	@ApiProperty({
		minimum: 0.1,
		example: 70.00
	})
	@IsNotEmpty()
	@IsNumber()
	price: number
}
