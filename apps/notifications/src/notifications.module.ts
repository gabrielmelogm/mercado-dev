import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { NotificationsRepository } from './repositories/notifications.repository';
import { DynamoNotificationsRepository } from './repositories/implements/dynamoNotifications.repository';


@Module({
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    DocumentClient,
    {
      provide: NotificationsRepository,
      useClass: DynamoNotificationsRepository
    }
  ],
})
export class NotificationsModule {}
