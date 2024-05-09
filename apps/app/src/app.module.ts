import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microServicesConfig } from './config/microservices.config';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';

@Module({
  imports: [
    ClientsModule.register(microServicesConfig)
  ],
  controllers: [ProductsController, OrdersController],
  providers: [ProductsService, OrdersService],
})
export class AppModule {}
