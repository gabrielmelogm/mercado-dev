import { ClientProviderOptions, Transport } from '@nestjs/microservices'
import { SERVICE } from '../services.enum'

export const productsServiceConfig: ClientProviderOptions = {
	name: SERVICE.PRODUCTS,
	transport: Transport.RMQ,
	options: {
		urls: ['amqp://admin:admin@rabbitmq:5672'],
		queue: 'app',
		queueOptions: {
			durable: false,
		},
	},
}
