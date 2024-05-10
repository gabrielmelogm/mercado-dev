import { NestFactory } from '@nestjs/core'
import { NotificationsModule } from './notifications.module'
import { ordersServiceConfig } from './services/orders.service'
import { paymentsServiceConfig } from './services/payments.service'
import { appServiceConfig } from './services/app.service'

async function bootstrap() {
	const app = await NestFactory.create(NotificationsModule)
	app.connectMicroservice(appServiceConfig)
	app.connectMicroservice(ordersServiceConfig)
	app.connectMicroservice(paymentsServiceConfig)
	await app.startAllMicroservices()
}
bootstrap()
