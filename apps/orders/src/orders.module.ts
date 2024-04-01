import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaOrdersRepository } from './repositories/implements/prismaOrders.repository'
import { OrdersRepository } from './repositories/orders.repository'

@Module({
	imports: [PrismaModule],
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
