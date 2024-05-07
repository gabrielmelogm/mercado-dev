import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { UpdateNotificationDto } from './dto/updateNotification.dto';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get(':id')
  async getAll(@Param('id') id: string) {
    return await this.notificationsService.getAll(id)
  }

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return await this.notificationsService.CreateNotification(createNotificationDto)
  }

  @Patch()
  async updateStatus(@Body() updateNotificationDto: UpdateNotificationDto) {
    return await this.notificationsService.updateStatus(updateNotificationDto)
  }
}
