import { Injectable } from '@nestjs/common'
import { CreateNotificationDto } from './dto/createNotification.dto'
import { UpdateNotificationDto } from './dto/updateNotification.dto'
import { NotificationsRepository } from './repositories/notifications.repository'

@Injectable()
export class NotificationsService {
	constructor(
		private readonly notificationRepository: NotificationsRepository,
	) {}

	async CreateNotification(notification: CreateNotificationDto) {
		return await this.notificationRepository.CreateNotification(notification)
	}

	async getAll(userId: string) {
		return await this.notificationRepository.GetNotifications(userId)
	}

	async updateStatus(updateIsReadDto: UpdateNotificationDto) {
		return await this.notificationRepository.UpdateReadNotification(
			updateIsReadDto.userId,
			updateIsReadDto.notificationId,
		)
	}
}
