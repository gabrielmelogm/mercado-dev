import { NestFactory } from '@nestjs/core'
import { NotificationsModule } from './notifications.module'
import { appServiceConfig } from './services/app.service'
import { ordersServiceConfig } from './services/orders.service'
import { paymentsServiceConfig } from './services/payments.service'

async function bootstrap() {
	const app = await NestFactory.create(NotificationsModule)
	app.connectMicroservice(appServiceConfig)
	app.connectMicroservice(ordersServiceConfig)
	app.connectMicroservice(paymentsServiceConfig)
	await app.startAllMicroservices()
}
bootstrap()
