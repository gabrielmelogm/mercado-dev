import { Controller } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { CreateNotificationDto } from './dto/createNotification.dto'
import { GetNotificationsDto } from './dto/getNotifications.dto'
import { UpdateNotificationDto } from './dto/updateNotification.dto'
import { NotificationsService } from './notifications.service'

@Controller()
export class NotificationsController {
	constructor(private readonly notificationsService: NotificationsService) {}

	@MessagePattern('get_notifications')
	async getAll(@Payload() data: GetNotificationsDto) {
		return await this.notificationsService.getAll(data.userId)
	}

	@EventPattern('create_notification')
	async create(@Payload() data: CreateNotificationDto) {
		const notification =
			await this.notificationsService.CreateNotification(data)
		return notification
	}

	@MessagePattern('update_notification')
	async updateStatus(@Payload() updateNotificationDto: UpdateNotificationDto) {
		return await this.notificationsService.updateStatus(updateNotificationDto)
	}
}
