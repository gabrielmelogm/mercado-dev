import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import 'reflect-metadata'
import { OrdersModule } from './orders.module'

async function bootstrap() {
	const app = await NestFactory.create(OrdersModule)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	app.enableCors({
		origin: '*',
	})
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.RMQ,
		options: {
			urls: ['amqp://admin:admin@rabbitmq:5672'],
			queue: 'payments',
			queueOptions: {
				durable: false
			}
		}
	})
	await app.startAllMicroservices()
	await app.listen(3001)
}
bootstrap()
