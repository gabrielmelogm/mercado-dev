import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { ReqUserLogin } from './@types/useHeader'
import { AuthService } from './auth.service'

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@MessagePattern('auth_login')
	async login(@Payload() data: ReqUserLogin) {
		return await this.authService.login(data.user)
	}

	@MessagePattern('auth_verify_token')
	async verifyToken(@Payload() data: { token: string }) {
		return await this.authService.revalidateToken(data.token)
	}
}
