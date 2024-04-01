import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [OrdersController],
	providers: [OrdersService],
})
export class OrdersModule {}
