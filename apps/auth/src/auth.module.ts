import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { ClientsModule } from '@nestjs/microservices'
import { PassportModule } from '@nestjs/passport'
import { env } from '../env'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { authServiceConfig } from './services/auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
	imports: [
		ClientsModule.register([authServiceConfig]),
		PassportModule,
		JwtModule.register({
			secret: env.JWT_KEY,
			signOptions: {
				expiresIn: `${env.SESSION_EXPIRES}h`,
			},
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
