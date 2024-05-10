import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microServicesConfig } from './config/microservices.config';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { NotificationsController } from './controllers/notifications.controller';
import { NotificationsService } from './services/notifications.service';

@Module({
  imports: [
    ClientsModule.register(microServicesConfig)
  ],
  controllers: [ProductsController, OrdersController, NotificationsController],
  providers: [ProductsService, OrdersService, NotificationsService],
})
export class AppModule {}
