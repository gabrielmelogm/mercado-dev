import { ClientsModuleOptions } from '@nestjs/microservices'
import { notificationsServiceConfig } from './services/notifications.config'
import { ordersServiceConfig } from './services/orders.config'
import { productsServiceConfig } from './services/products.config'

export const microServicesConfig: ClientsModuleOptions = [
	productsServiceConfig,
	ordersServiceConfig,
	notificationsServiceConfig,
]
