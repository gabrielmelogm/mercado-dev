import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaOrdersRepository } from './repositories/implements/prismaOrders.repository'
import { OrdersRepository } from './repositories/orders.repository'

@Module({
	imports: [
		PrismaModule,
		ClientsModule.register([
			{
				name: 'ORDERS_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: ['amqp://admin:admin@rabbitmq:5672'],
					queue: 'orders',
					queueOptions: {
						durable: false
					}
				},
			},
		]),
	],
	providers: [
		OrdersService,
		{
			provide: OrdersRepository,
			useClass: PrismaOrdersRepository,
		},
	],
	controllers: [OrdersController],
})
export class OrdersModule {}
