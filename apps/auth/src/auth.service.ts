import {
	Inject,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ClientProxy } from '@nestjs/microservices'
import { compareSync } from 'bcrypt'
import { firstValueFrom } from 'rxjs'
import { UserPayload } from './@types/userPayload'

@Injectable()
export class AuthService {
	constructor(
		@Inject('AUTH_SERVICE')
		private readonly userServiceClient: ClientProxy,
		private readonly jwtService: JwtService,
	) {}

	async login(user: { id: string; email: string; password: string }) {
		const isValid = await this.validateUser(user.email, user.password)

		if (!isValid)
			throw new UnauthorizedException('Email or password is invalid')

		const payload: UserPayload = { sub: String(user.id), email: user.email }
		return {
			token: this.jwtService.sign(payload),
		}
	}

	async validateUser(
		email: string,
		password: string,
	): Promise<{ email: string; password: string }> | null {
		let user: { email: string; password: string }
		try {
			user = await firstValueFrom(
				this.userServiceClient.send('get_user_by_email', email),
			)

			if (!user) throw new NotFoundException()
		} catch (error) {
			return null
		}

		const isPasswordValid = compareSync(password, user.password)
		if (!isPasswordValid) return null

		return user
	}
}
