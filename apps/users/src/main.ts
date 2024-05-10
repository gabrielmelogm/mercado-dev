import { NestFactory } from '@nestjs/core'
import { appServiceConfig } from './services/app.service'
import { authServiceConfig } from './services/auth.service'
import { UsersModule } from './users.module'

async function bootstrap() {
	const app = await NestFactory.create(UsersModule)
	app.connectMicroservice(appServiceConfig)
	app.connectMicroservice(authServiceConfig)
	await app.startAllMicroservices()
	await NestFactory.createMicroservice(UsersModule)
}
bootstrap()
