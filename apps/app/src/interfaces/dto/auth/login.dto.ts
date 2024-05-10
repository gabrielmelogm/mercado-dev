import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
	@ApiProperty({
		example: 'johndoe@email.com',
	})
	@IsNotEmpty()
	@IsEmail()
	email: string

	@ApiProperty({
		example: '@John123Doe',
	})
	@IsNotEmpty()
	@IsString()
	password: string
}
