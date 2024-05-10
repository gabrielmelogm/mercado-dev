import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from '../interfaces/dto/users/createUser.dto'
import { UsersService } from '../services/users.service'

@ApiTags('users')
@Controller('user')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get(':id')
	async getUserById(@Param('id') id: string) {
		return await this.usersService.getUserById(id)
	}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto) {
		return await this.usersService.createUser(createUserDto)
	}
}
