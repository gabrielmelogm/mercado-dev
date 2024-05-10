import { Body, Controller, Get, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NotificationsService } from "../services/notifications.service";
import { GetNotificationsDto } from "../interfaces/dto/notifications/getNotifications.dto";
import { UpdateNotificationDto } from "../interfaces/dto/notifications/updateNotification.dto";

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService
  ) {}

  @Get()
  async getNotifications(@Body() getDto: GetNotificationsDto) {
    await this.notificationsService.getNotifications(getDto)
  }

  @Patch()
  async updateToReadNotification(@Body() updateNotificationDto: UpdateNotificationDto) {
    await this.notificationsService.updateToReadNotification(updateNotificationDto)
  }
}