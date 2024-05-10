import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const paymentsServiceConfig: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:admin@rabbitmq:5672'],
    queue: 'payments',
    queueOptions: {
      durable: false
    }
  }
}