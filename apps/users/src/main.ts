import { NestFactory } from '@nestjs/core'
import { appServiceConfig } from './services/app.service'
import { UsersModule } from './users.module'

async function bootstrap() {
	const app = await NestFactory.create(UsersModule)
	app.connectMicroservice(appServiceConfig)
	await app.startAllMicroservices()
	await NestFactory.createMicroservice(UsersModule)
}
bootstrap()
