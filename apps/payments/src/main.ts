import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { PaymentsModule } from './payments.module'

async function bootstrap() {
	const app = await NestFactory.create(PaymentsModule)
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.KAFKA,
		options: {
			client: {
				brokers: ['kafka:29092'],
			},
			consumer: {
				groupId: 'payments-consumer',
			},
		},
	})
	await app.startAllMicroservices()
	await app.listen(3002)
}
bootstrap()
