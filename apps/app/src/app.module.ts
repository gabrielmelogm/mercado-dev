import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { microServicesConfig } from './config/microservices.config'
import { NotificationsController } from './controllers/notifications.controller'
import { OrdersController } from './controllers/orders.controller'
import { ProductsController } from './controllers/products.controller'
import { UsersController } from './controllers/users.controller'
import { NotificationsService } from './services/notifications.service'
import { OrdersService } from './services/orders.service'
import { ProductsService } from './services/products.service'
import { UsersService } from './services/users.service'

@Module({
	imports: [ClientsModule.register(microServicesConfig)],
	controllers: [
		ProductsController,
		OrdersController,
		NotificationsController,
		UsersController,
	],
	providers: [
		ProductsService,
		OrdersService,
		NotificationsService,
		UsersService,
	],
})
export class AppModule {}
