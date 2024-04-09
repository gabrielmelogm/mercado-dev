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
				transport: Transport.KAFKA,
				options: {
					client: {
						clientId: 'payments',
						brokers: ['kafka:29092'],
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
