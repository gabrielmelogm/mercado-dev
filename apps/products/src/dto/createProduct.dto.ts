import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsOptional()
	description?: string

	@IsString()
	@IsNotEmpty()
	thumb: string

	@IsNotEmpty()
	@IsNumber()
	price: number
}
