import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'
import { SERVICE } from '../config/services.enum'
import { LoginDto } from '../interfaces/dto/auth/login.dto'

@Injectable()
export class AuthService {
	constructor(
		@Inject(SERVICE.AUTH)
		private readonly authServiceClient: ClientProxy,

		@Inject(SERVICE.USERS)
		private readonly usersServiceClient: ClientProxy,
	) {}

	async login(data: LoginDto) {
		const user = await firstValueFrom(
			this.usersServiceClient.send('get_user_by_email', data.email),
		)

		const payload = {
			user: {
				id: user.id,
				email: data.email,
				password: data.password,
			},
		}

		const token = await firstValueFrom(
			this.authServiceClient.send('auth_login', payload),
		)

		return token
	}
}
