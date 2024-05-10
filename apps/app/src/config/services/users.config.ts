import { ClientProviderOptions, Transport } from '@nestjs/microservices'
import { SERVICE } from '../services.enum'

export const usersServiceConfig: ClientProviderOptions = {
	name: SERVICE.USERS,
	transport: Transport.RMQ,
	options: {
		urls: ['amqp://admin:admin@rabbitmq:5672'],
		queue: 'app',
		queueOptions: {
			durable: false,
		},
	},
}
