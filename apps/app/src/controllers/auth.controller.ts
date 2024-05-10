import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LoginDto } from '../interfaces/dto/auth/login.dto'
import { AuthService } from '../services/auth.service'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	async login(@Body() loginDto: LoginDto) {
		return await this.authService.login(loginDto)
	}
}
