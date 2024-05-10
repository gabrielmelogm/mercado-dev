import { MicroserviceOptions, Transport } from '@nestjs/microservices'

export const authServiceConfig: MicroserviceOptions = {
	transport: Transport.RMQ,
	options: {
		urls: ['amqp://admin:admin@rabbitmq:5672'],
		queue: 'auth',
		queueOptions: {
			durable: false,
		},
	},
}
