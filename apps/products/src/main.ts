import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import 'reflect-metadata'
import { ProductsModule } from './products.module'
import { MicroserviceOptions } from '@nestjs/microservices'
import { appServiceConfig } from './services/app.service'

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, appServiceConfig)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	await app.listen()
}
bootstrap()
