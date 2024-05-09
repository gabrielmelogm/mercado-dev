import { ClientsModuleOptions } from "@nestjs/microservices";
import { productsServiceConfig } from "./products.config";

export const microServicesConfig: ClientsModuleOptions = [productsServiceConfig]