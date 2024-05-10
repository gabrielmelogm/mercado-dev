import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { microServicesConfig } from './config/microservices.config'
import { NotificationsController } from './controllers/notifications.controller'
import { OrdersController } from './controllers/orders.controller'
import { ProductsController } from './controllers/products.controller'
import { NotificationsService } from './services/notifications.service'
import { OrdersService } from './services/orders.service'
import { ProductsService } from './services/products.service'

@Module({
	imports: [ClientsModule.register(microServicesConfig)],
	controllers: [ProductsController, OrdersController, NotificationsController],
	providers: [ProductsService, OrdersService, NotificationsService],
})
export class AppModule {}
