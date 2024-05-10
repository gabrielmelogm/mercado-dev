import { ClientProviderOptions, Transport } from '@nestjs/microservices'

export const authServiceConfig: ClientProviderOptions = {
	name: 'AUTH_SERVICE',
	transport: Transport.RMQ,
	options: {
		urls: ['amqp://admin:admin@rabbitmq:5672'],
		queue: 'auth',
		queueOptions: {
			durable: false,
		},
	},
}
