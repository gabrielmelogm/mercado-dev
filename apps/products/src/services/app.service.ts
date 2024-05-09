import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const appServiceConfig: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:admin@rabbitmq:5672'],
    queue: 'app',
    queueOptions: {
      durable: false
    }
  }
}