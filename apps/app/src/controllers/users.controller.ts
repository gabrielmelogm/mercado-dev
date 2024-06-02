import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../guards/auth.guard'
import { CreateUserDto } from '../interfaces/dto/users/createUser.dto'
import { UsersService } from '../services/users.service'

@ApiTags('users')
@Controller('user')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@UseGuards(AuthGuard)
	@Get(':id')
	async getUserById(@Param('id') id: string) {
		return await this.usersService.getUserById(id)
	}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto) {
		return await this.usersService.createUser(createUserDto)
	}
}
