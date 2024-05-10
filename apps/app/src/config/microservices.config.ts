import { ClientsModuleOptions } from '@nestjs/microservices'
import { authServiceConfig } from './services/auth.config'
import { notificationsServiceConfig } from './services/notifications.config'
import { ordersServiceConfig } from './services/orders.config'
import { productsServiceConfig } from './services/products.config'
import { usersServiceConfig } from './services/users.config'

export const microServicesConfig: ClientsModuleOptions = [
	productsServiceConfig,
	ordersServiceConfig,
	notificationsServiceConfig,
	usersServiceConfig,
	authServiceConfig,
]
