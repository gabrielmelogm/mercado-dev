import { ClientsModuleOptions } from "@nestjs/microservices";
import { productsServiceConfig } from "./products.config";
import { ordersServiceConfig } from "./orders.config";

export const microServicesConfig: ClientsModuleOptions = [productsServiceConfig, ordersServiceConfig]