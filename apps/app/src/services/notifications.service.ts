import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'
import { SERVICE } from '../config/services.enum'
import { GetNotificationsDto } from '../interfaces/dto/notifications/getNotifications.dto'
import { UpdateNotificationDto } from '../interfaces/dto/notifications/updateNotification.dto'

@Injectable()
export class NotificationsService {
	constructor(
		@Inject(SERVICE.NOTIFICATIONS)
		private readonly notificationsServiceClient: ClientProxy,
	) {}

	async getNotifications(getNotificationsDto: GetNotificationsDto) {
		const notifications = await firstValueFrom(
			this.notificationsServiceClient.send(
				'get_notifications',
				getNotificationsDto,
			),
		)

		return notifications
	}

	async updateToReadNotification(updateReadDto: UpdateNotificationDto) {
		await firstValueFrom(
			this.notificationsServiceClient.send(
				'update_notification',
				updateReadDto,
			),
		)
	}
}
