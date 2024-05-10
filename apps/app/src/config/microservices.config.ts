import { ClientsModuleOptions } from "@nestjs/microservices";
import { productsServiceConfig } from "./services/products.config";
import { ordersServiceConfig } from "./services/orders.config";
import { notificationsServiceConfig } from "./services/notifications.config";

export const microServicesConfig: ClientsModuleOptions = [productsServiceConfig, ordersServiceConfig, notificationsServiceConfig]