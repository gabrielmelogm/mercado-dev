import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaOrdersRepository } from './repositories/implements/prismaOrders.repository'
import { OrdersRepository } from './repositories/orders.repository'
import { ordersServiceConfig } from './services/orders.service'

@Module({
	imports: [PrismaModule, ClientsModule.register([ordersServiceConfig])],
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
