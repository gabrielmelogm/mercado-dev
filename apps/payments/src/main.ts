import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { PaymentsModule } from './payments.module'

async function bootstrap() {
	const app = await NestFactory.create(PaymentsModule)
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.RMQ,
		options: {
			urls: ['amqp://admin:admin@rabbitmq:5672'],
			queue: 'orders',
			queueOptions: {
				durable: false,
			},
		},
	})
	await app.startAllMicroservices()
	await app.listen(3002)
}
bootstrap()
