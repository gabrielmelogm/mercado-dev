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
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.KAFKA,
		options: {
			client: {
				brokers: ['localhost:9092'],
			},
			consumer: {
				groupId: 'orders-consumer',
			},
		},
	})
	await app.startAllMicroservices()
	await app.listen(3001)
}
bootstrap()
