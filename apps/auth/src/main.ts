import { NestFactory } from '@nestjs/core'
import { AuthModule } from './auth.module'
import { appServiceConfig } from './services/app.service'

async function bootstrap() {
	const app = await NestFactory.create(AuthModule)
	app.connectMicroservice(appServiceConfig)
	await app.startAllMicroservices()
	await NestFactory.createMicroservice(AuthModule)
}
bootstrap()
