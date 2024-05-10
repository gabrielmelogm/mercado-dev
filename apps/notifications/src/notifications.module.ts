import { Module } from '@nestjs/common'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { NotificationsController } from './notifications.controller'
import { NotificationsService } from './notifications.service'
import { DynamoNotificationsRepository } from './repositories/implements/dynamoNotifications.repository'
import { NotificationsRepository } from './repositories/notifications.repository'

@Module({
	controllers: [NotificationsController],
	providers: [
		NotificationsService,
		DocumentClient,
		{
			provide: NotificationsRepository,
			useClass: DynamoNotificationsRepository,
		},
	],
})
export class NotificationsModule {}
