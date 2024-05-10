import { ClientProviderOptions, Transport } from '@nestjs/microservices'
import { SERVICE } from '../services.enum'

export const authServiceConfig: ClientProviderOptions = {
	name: SERVICE.AUTH,
	transport: Transport.RMQ,
	options: {
		urls: ['amqp://admin:admin@rabbitmq:5672'],
		queue: 'app',
		queueOptions: {
			durable: false,
		},
	},
}
