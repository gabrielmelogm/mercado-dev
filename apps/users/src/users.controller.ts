import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { CreateUserDto } from './dto/createUser.dto'
import { GetUserByEmailDto } from './dto/getUserByEmail.dto'
import { GetUserByIdDto } from './dto/getUserById.dto'
import { UsersService } from './users.service'

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@MessagePattern('create_user')
	async CreateUser(@Payload() data: CreateUserDto) {
		return await this.usersService.CreateUser(data)
	}

	@MessagePattern('get_user_by_id')
	async GetUserById(@Payload() data: GetUserByIdDto) {
		return await this.usersService.GetUserById(data.id)
	}

	@MessagePattern('get_user_by_email')
	async GetUserByEmail(@Payload() data: GetUserByEmailDto) {
		return await this.usersService.GetUserByEmail(data.email)
	}
}
