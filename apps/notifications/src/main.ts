import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NotificationsModule } from './notifications.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
	const app = await NestFactory.create(NotificationsModule)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.RMQ,
		options: {
			urls: ['amqp://admin:admin@rabbitmq:5672'],
			queue: 'orders',
			queueOptions: {
				durable: false
			}
		},
	})
	await app.listen(3003)
}
bootstrap()
