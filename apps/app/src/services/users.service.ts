import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'
import { SERVICE } from '../config/services.enum'
import { CreateUserDto } from '../interfaces/dto/users/createUser.dto'

@Injectable()
export class UsersService {
	constructor(
		@Inject(SERVICE.USERS)
		private readonly usersServiceClient: ClientProxy,
	) {}

	async getUserById(id: string) {
		const user = await firstValueFrom(
			this.usersServiceClient.send('get_user_by_id', id),
		)

		return user
	}

	async createUser(user: CreateUserDto) {
		const newUser = await firstValueFrom(
			this.usersServiceClient.send('create_user', user),
		)

		return newUser
	}
}
