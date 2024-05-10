import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { PaymentsController } from './payments.controller'
import { PaymentsService } from './payments.service'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaPaymentsRepository } from './repositories/implements/prismaPayments.repository'
import { PaymentsRepository } from './repositories/payments.repository'

@Module({
	imports: [
		PrismaModule,
		ClientsModule.register([
			{
				name: 'PAYMENTS_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: ['amqp://admin:admin@rabbitmq:5672'],
					queue: 'payments',
					queueOptions: {
						durable: false,
					},
				},
			},
		]),
	],
	controllers: [PaymentsController],
	providers: [
		PaymentsService,
		{
			provide: PaymentsRepository,
			useClass: PrismaPaymentsRepository,
		},
	],
})
export class PaymentsModule {}
