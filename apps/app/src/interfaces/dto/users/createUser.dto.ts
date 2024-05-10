import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Matches } from 'class-validator'
import { RegExHelper } from '../../../helpers/regex.helper'

export class CreateUserDto {
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
	@Matches(RegExHelper.password, {
		message: 'The password must be 8 caracteres with special caracteres',
	})
	password: string
}
