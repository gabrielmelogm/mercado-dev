import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { UpdateNotificationDto } from './dto/updateNotification.dto';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get(':id')
  async getAll(@Param('id') id: string) {
    return await this.notificationsService.getAll(id)
  }

  @EventPattern('create_notification')
  async create(@Payload() data: CreateNotificationDto) {
    const notification =  await this.notificationsService.CreateNotification(data)
    console.log(notification)
    return notification
  }

  @Patch()
  async updateStatus(@Body() updateNotificationDto: UpdateNotificationDto) {
    return await this.notificationsService.updateStatus(updateNotificationDto)
  }
}
