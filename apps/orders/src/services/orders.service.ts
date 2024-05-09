import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const ordersServiceConfig: ClientProviderOptions = {
  name: 'ORDERS_SERVICE',
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:admin@rabbitmq:5672'],
    queue: 'orders',
    queueOptions: {
      durable: false
    }
  }
}