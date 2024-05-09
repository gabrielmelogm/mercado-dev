import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microServicesConfig } from './config/microservices.config';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [
    ClientsModule.register(microServicesConfig)
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
