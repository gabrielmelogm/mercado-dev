import { NestFactory } from '@nestjs/core'
import 'reflect-metadata'
import { OrdersModule } from './orders.module'
import { appServiceConfig } from './services/app.service'
import { paymentsServiceConfig } from './services/payments.service'

async function bootstrap() {
	const app = await NestFactory.create(OrdersModule)
	app.connectMicroservice(appServiceConfig)
	app.connectMicroservice(paymentsServiceConfig)
	await app.startAllMicroservices()
	await NestFactory.createMicroservice(OrdersModule)
}
bootstrap()
